document.addEventListener('DOMContentLoaded', function () {
    getVr();
    getStationsToArray();
    console.log(window.location.search)
}, false);



const stations = [];
const stationShorts = [];

function getStationsToArray() {
    fetch('https://rata.digitraffic.fi/api/v1/metadata/stations')
        .then((response) => response.json())
        .then(function (response) {
            return response.map(function (data) {
                stations.push(data.stationName);
                stationShorts.push(data.stationShortCode);
            })
        })
}

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}


// const getButton = document.getElementById("getButton").addEventListener("click", getVr);
const list = document.getElementById("quoteList");


const url = 'https://rata.digitraffic.fi/api/v1/live-trains?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=50&station=HKI';

function getVr() {
    fetch(url)
        .then((response) => response.json())
        .then(function (response) {
            return response.filter(value => value.trainCategory !== "Shunting")
        })
        .then(function (response) {
            return response.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.timeTableRows[0].scheduledTime) - new Date(a.timeTableRows[0].scheduledTime);
            });
        })
        .then(function (response) {
            console.log(response);
            return response.map(function (data) {

                let lastIndexOfTimeTable = data.timeTableRows.length - 1;

                let optiot = {hour: '2-digit', minute: '2-digit', hour12: false};

                let a = data.timeTableRows[0].scheduledTime;
                let scheduledTime = new Date(a);

                let b = data.timeTableRows[0].actualTime;
                let estimatedTime = (b === undefined) ? scheduledTime : new Date(b);

                let c = data.timeTableRows[lastIndexOfTimeTable].scheduledTime;
                let arrivalTime = new Date(c);


                let stationCode = data.timeTableRows[0].stationShortCode
                let stationName = stations[stationShorts.indexOf(stationCode)]
                stationName = (stationName === undefined) ? "Ei saatavilla" : stationName;

                let lastStationCode = data.timeTableRows[lastIndexOfTimeTable].stationShortCode
                let lastStationName = stations[stationShorts.indexOf(lastStationCode)]
                lastStationName = (lastStationName === undefined) ? "Ei saatavilla" : lastStationName;

                let row = list.insertRow(0);

                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);

                cell1.innerHTML = data.trainType + data.trainNumber
                cell2.innerHTML = data.timeTableRows[0].stationShortCode
                cell3.innerHTML = data.timeTableRows[lastIndexOfTimeTable].stationShortCode
                cell4.innerHTML = scheduledTime.toLocaleString("fi", optiot)
                cell5.innerHTML = arrivalTime.toLocaleString("fi", optiot);

                cell2.innerHTML = stationName.replace("asema", "");
                cell3.innerHTML = lastStationName.replace("asema", "");

            })
        })
}
;


window.onscroll = function () {
    myFunction()
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

