const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const mymap = L.map('mapid', options).setView([-23.5231, -46.8072], 16);

// Create and add tilelayer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11', /*Linha para street map */
    id: 'mapbox/satellite-v9', /* linha para satelite map */
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2FnbmVybW9yIiwiYSI6ImNrZ2NuMzFjdTBzb3UyeHJ2djY1OTM4anUifQ.RLbTp_4IJGGVq-mKCIe6Jw'
})
.addTo(mymap);

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and add marker
var marker = L
.marker([-23.5231, -46.8072], { icon })
.addTo(mymap)