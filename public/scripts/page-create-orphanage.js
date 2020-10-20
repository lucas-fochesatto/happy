const map = L.map('mapid').setView([user.latitude, user.longitude], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon(
    {
        iconUrl: "/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68]
    }
)

let marker;

//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//add new photo field

function addPhotoField() {
    //get photo container #images
    const container = document.querySelector('#images')
    //get .new-image to duplicate
    const newImage = document.querySelectorAll('.new-upload')
    //clone it
    const clonedField = newImage[newImage.length - 1].cloneNode(true)
    
    const input = clonedField.children[0];

    if(input.value == ""){
        return
    }

    input.value = "";

    container.appendChild(clonedField);
}

function removePhotoField(event) {
    const span = event.currentTarget
    const fields = document.querySelectorAll('.new-upload')
    if(fields.length <= 1) {
        //clear value
        fields[0].children[0].value = ""
        return
    }
    
    //delete field
    span.parentNode.remove()
}

// YES or NO selection

function addActiveClass(event) {
    //remove .active
    const buttons = document.querySelectorAll('.button-select button')
    for(button of buttons) {
        button.classList.remove('active')
    }

    const currentButton = event.currentTarget
    const hiddenInput = document.querySelector('#open-on-weekends')

    //change hiddenInput value
    hiddenInput.value = currentButton.dataset.value

    //add .active on clicked button
    currentButton.classList.add('active')
    console.log(hiddenInput.value)
}

function validate(event) {
    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value

    console.log(lat)
    //validar se lat e lng estão preenchidos

    if(lat == '' || lng == '') {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }
}