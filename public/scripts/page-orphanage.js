const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanLat = document.querySelector('span[data-lat]').dataset.lat
const spanLng = document.querySelector('span[data-lng]').dataset.lng
const map = L.map('mapid', options).setView([spanLat, spanLng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon(
    {
        iconUrl: "/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    }
)

L.marker([spanLat, spanLng], { icon }).addTo(map)

/* Image Gallery */

function selectImage(event) {
    const button = event.currentTarget
    console.log(button.children)

    //remover todas as classes .active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src

    //atualizar o container de imagem

    //adicionar a classe .active para o botao clicado

    button.classList.add("active")
}