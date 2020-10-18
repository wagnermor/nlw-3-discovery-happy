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

/* image galery */
function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove(".active");
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem
    imageContainer.src = image.src
    // adicionar a classe .active para este botao
    button.classList.add('active')
}