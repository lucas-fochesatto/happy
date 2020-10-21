const map = L.map('mapid').setView([user.latitude, user.longitude], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon(
    {
        iconUrl: "/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    }
)

const youIcon = L.icon(
    {
        iconUrl: "/images/you-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [0, 0]
    }
)

L.marker([user.latitude, user.longitude], { icon: youIcon }).addTo(map)

function addMarker({id, name, lat, lng}) {
    const popup = L.popup(
        {
            closeButton: false,
            className: 'map-popup',
            minWidth: 240,
            minHeight: 240
        }
    ).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" </a>`)
    
    L.marker([lat, lng], { icon }).addTo(map)
        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})