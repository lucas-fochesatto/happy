const user = {
    latitude: localStorage.getItem('latitude'),
    longitude: localStorage.getItem('longitude'),
    city: localStorage.getItem('city'),
    state: localStorage.getItem('state'),
}

const strong = document.querySelector('.location strong')
const p = document.querySelector('.location p')

strong.innerText = user.city
p.innerText = user.state