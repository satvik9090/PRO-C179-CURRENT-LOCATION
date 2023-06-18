let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 16
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );
    var img1 = document.querySelector("#amber")
    var marker1 = new mapboxgl.Marker({
      element:img1
    })
    .setLngLat([-79.42684,43.62400])
    .addTo(map);

    var img1 = document.querySelector("#quebec")
    var marker1 = new mapboxgl.Marker({
      element:img1
    })
    .setLngLat([-71.22832,46.77942])
    .addTo(map);

    var img1 = document.querySelector("#PEI")
    var marker1 = new mapboxgl.Marker({
      element:img1
    })
    .setLngLat([-63.28329,46.39529])
    .addTo(map);

    var img1 = document.querySelector("#columbia")
    var marker1 = new mapboxgl.Marker({
      element:img1
    })
    .setLngLat([-126.56067,55.96390])
    .addTo(map);

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

    map.on('click', function (e) {
        destination = e.lngLat;
    });
}

