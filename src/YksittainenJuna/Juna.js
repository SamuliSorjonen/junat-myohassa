hae()
function hae(numero){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange=readystagechange;
    xhr.open("GET", "https://rata.digitraffic.fi/api/v1/trains/latest/"+numero);
    xhr.send();
}
function readystagechange() {
    if (xhr.readyState === 4) {
        var junat = JSON.parse(xhr.responseText);
        console.dir(junat)
        tulosta(junat);
    }
}
function tulosta(juna) {
    var tyyppi;
    for (var j of juna) {
        if (j.trainCategory === "Commuter") {
            tyyppi = "Lähi"
        } else {
            tyyppi = "Kauko";
        }
    }
    for (var j of juna) {
        var otsikko = document.getElementById("otsikko");
        otsikko.innerHTML += tyyppi + "junan " + j.trainNumber + " aikataulut päivämäärällä  " + j.departureDate + " ovat seuraavat:"
        var myTrain = document.getElementById("myTrain");

        for (var i = 0; i < j.timeTableRows.length; i++) {
            if (j.timeTableRows[i].trainStopping == true) {
                aika = new Date(j.timeTableRows[i].scheduledTime);
                aikakaksi = aika.toLocaleTimeString({hour: '2-digit', minute: '2-digit', hour12: false})
                if (i == j.timeTableRows.length - 1) {
                    aikalahto = 0;
                    aikalahtotoka = 0;
                } else {
                    aikalahto = new Date(j.timeTableRows[i + 1].scheduledTime);
                    aikalahtotoka = aikalahto.toLocaleTimeString({hour: '2-digit', minute: '2-digit', hour12: false})
                }
            }
                if (i==0){
                    myTrain.innerHTML += "<td>" + j.timeTableRows[i].stationShortCode + "</td><td>" + aikakaksi + "</td><td>" + aikakaksi + "</td>"

                }

                if (j.timeTableRows[i].type === "ARRIVAL") {

                    myTrain.innerHTML += "<td>" + j.timeTableRows[i].stationShortCode + "</td><td>" + aikakaksi + "</td><td>" + aikalahtotoka + "</td>"
                }
            }


        }



}