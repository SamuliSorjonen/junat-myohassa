var baseurl="https://rata.digitraffic.fi/api/v1";
var loppuurl = "/live-trains/station/";
//  /live-trains/station/<departure_station_code>/<arrival_station_code>?departure_date=<departure_date>&from=<from>&to=<to>&limit=<limit>

const stationsOrg = [];
const stationShorts = [];
const stationObject = [];
getStationsToArray();
function getStationsToArray() {
    fetch('https://rata.digitraffic.fi/api/v1/metadata/stations')
        .then((response) => response.json())
        .then(function (response) {
            return response.map(function (data) {
                if(data.passengerTraffic === true) {
                    stationsOrg.push(data.stationName);
                    stationShorts.push(data.stationShortCode);

                }
            })
        })
}

console.log(stationShorts);

// list of departure and arrival stations
var stations = {LH: "Lahti", HKI: "Helsinki", TPE: "Tampere", TKU: "Turku", ROI: "Rovaniemi", OL: "Oulu"};
var arrival = document.getElementById("arrival");
var departure = document.getElementById("departure");
for (var shortcode in stations) {
    var arrivaloption = document.createElement("option");
    var departureoption = document.createElement("option");
    arrivaloption.value = shortcode;
    departureoption.value = shortcode;
    arrivaloption.innerText = stations[shortcode];
    departureoption.innerText = stations[shortcode];
    arrival.appendChild(arrivaloption);
    departure.appendChild(departureoption);
}

var input = '';
document.getElementById("date").addEventListener("change", function() {
    input = this.value;
    var dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13
});
var timeinput = '';

document.getElementById("time").addEventListener("change", function () {
    timeinput = this.value;
    console.log(timeinput);
});

var lista = document.getElementById("trainTable"); // oikeasti siis tbody
var xhr = new XMLHttpRequest();
var arrivalStation = '';
var departureStation = '';
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // Tehdään jotakin, pyyntö on valmis
            var tulos = JSON.parse(xhr.responseText);
            console.dir(tulos);
            kasitteletulos(tulos);
        } else {
            alert("Pyyntö epäonnistui");
            document.getElementById("hae").innerText = "Hae data uudestaan painamalla nappulaa:";
            document.getElementById("btn").style.visibility = "visible";
        }
    }
};

function kasitteletulos(tulos) {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    var optiot = {hour: '2-digit', minute:'2-digit', hour12: false};
    for(var i = 0 ; i < tulos.length ; ++i) {
        var elem = document.createElement("tr");
        var juna = tulos[i];
        var vikarivi =  juna.timeTableRows[juna.timeTableRows.length-1];

        // hakee nyt lähtöajan sen mukaan mistä juna alunperin lähtee
        var lahtoaikaAsemalta = "";
        for (var j = 0; j < juna.timeTableRows.length; j++){
            if(juna.timeTableRows[j].stationShortCode === departureStation && juna.timeTableRows[j].type === "DEPARTURE"){
                lahtoaikaAsemalta = new Date(juna.timeTableRows[j].scheduledTime).toLocaleTimeString("fi", optiot);
            }
        }

        var lahtoaika = new Date(juna.timeTableRows[0].scheduledTime).toLocaleTimeString("fi", optiot);
        var saapumisaikalopullinen = new Date(vikarivi.scheduledTime).toLocaleTimeString("fi", optiot);
        var maaraasema = stations[vikarivi.stationShortCode];
        if (!maaraasema) maaraasema = vikarivi.stationShortCode;
        // Etsityn aseman saapumisajan kaivaminen:
        for(var ind = 1 ; ind < juna.timeTableRows.length ; ++ind) {
            if (juna.timeTableRows[ind].stationShortCode===arrivalStation) {
                var haettusaapumisaika = new Date(juna.timeTableRows[ind].scheduledTime).toLocaleTimeString("fi", optiot);
                break;
            }
        }
        var junatunnus = juna.trainCategory === "Commuter" ? juna.commuterLineID : juna.trainType + juna.trainNumber;

        var solut = [];
        var junatyyppitd = document.createElement("td"); junatyyppitd.innerText = juna.trainCategory; solut.push(junatyyppitd);
        var junatunnustd = document.createElement("td"); junatunnustd.innerText = junatunnus; solut.push(junatunnustd);
        var lahteetd = document.createElement("td"); lahteetd.innerText = lahtoaikaAsemalta; solut.push(lahteetd);
        var perillatd = document.createElement("td"); perillatd.innerText = haettusaapumisaika; solut.push(perillatd);
        solut.push(document.createElement("td"));
        var maaraasematd = document.createElement("td"); maaraasematd.innerText = maaraasema; solut.push(maaraasematd);
        var perillalopullinentd = document.createElement("td"); perillalopullinentd.innerText = saapumisaikalopullinen; solut.push(perillalopullinentd);

        for(var j = 0 ; j < solut.length ; ++j) {
            elem.appendChild(solut[j]);
        }
        lista.appendChild(elem);
    }
    document.getElementById("hae").innerText = "Hae data uudestaan painamalla nappulaa:";
    document.getElementById("btn").style.visibility = "visible";
}

function haedata() {
    arrivalStation = document.getElementById("arrival").value;
    departureStation = document.getElementById("departure").value;
    //xhr.open('get', baseurl+loppuurl+departureStation+"/"+arrivalStation);
    xhr.open('get', baseurl+loppuurl+departureStation+"/"+arrivalStation+"?startDate="+input+"T"+timeinput+":00%2B03:00");
    console.log(baseurl+loppuurl+departureStation+"/"+arrivalStation+"?startDate="+input+"T"+timeinput+":00Z");
    xhr.send();
}
//haedata();
