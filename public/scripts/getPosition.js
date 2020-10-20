if ("geolocation" in navigator) {
    const location = navigator.geolocation
    location.getCurrentPosition( (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        const coordinates = [lat, lng]

        localStorage.setItem('latitude', lat)
        localStorage.setItem('longitude', lng)

        getCity(coordinates)
    })
} else {
    alert("I'm sorry, but geolocation services are not supported by your browser.");
}


function getCity(coordinates) { 
    var xhr = new XMLHttpRequest(); 
    var lat = coordinates[0]; 
    var lng = coordinates[1]; 
  
    // Paste your LocationIQ token below. 
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.99141b9c0e43b307c841c4d4c11747f1&lat=" + 
    lat + "&lon=" + lng + "&format=json", true); 
    xhr.send(); 
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            var response = JSON.parse(xhr.responseText); 
            localStorage.setItem('city', response.address.city)
            localStorage.setItem('state', response.address.state)
        }
    }
}