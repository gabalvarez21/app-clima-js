let url = 'https://api.openweathermap.org/data/2.5/weather?'
let api_key = '93d782d4257537ecf0f0b31efb190f44'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${url}q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const humedad = response.main.humidity
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
}

