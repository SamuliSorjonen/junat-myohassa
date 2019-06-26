// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
const url = "https://rata.digitraffic.fi/api/v1/train-locations/latest/";

function getData() {
    fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(response => response.filter(a => a.speed !== 0))
        .then(data => renderData(data))
        .catch(error => console.log("Error" + error))
}

function renderData(data) {
    var helsinki = {lat: 62.173, lng: 24.944};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: helsinki});
    console.log(data)
    let locations = data.map(function (data) {
        // return {lng: data.location.coordinates[0], lat: data.location.coordinates[1]}
        return {lng: data.location.coordinates[0], lat: data.location.coordinates[1],
                                        url: "../YksittainenJuna/Juna.html?numero="+ data.trainNumber}
    })
    console.log(locations)
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({ position: {lng: location.lng, lat: location.lat}, url: location.url, map: map})
            // marker.addEventListener("click", console.log("BOOO"));
        // return marker;
    });

    // markers.forEach(function () {
    //     addEventListener("click", console.log("SDSS"))
    // })

    for (let i = 0; i < markers.length; i++) {
        google.maps.event.addListener(markers[i], 'click', function() {
            window.location.href = markers[i].url;
        });
    }
}


function initMap() {
    // The location of Uluru
    var helsinki = {lat: 62.173, lng: 24.944};

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: helsinki});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: helsinki, map: map});
    // var marker = new google.maps.Marker({position: hhelsinki, map: map});
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

