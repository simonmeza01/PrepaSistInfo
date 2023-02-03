const titleElement = document.getElementById('mainTitle');
const inputElement = document.getElementById('mainInput');
const buttonElement = document.getElementById('searchButton');
const resultsContainerElem = document.getElementById('results');
const API_ID = "1e1b8ba3a1f8f93a993558bee4bcfb19";

function printResults(data){
    const {main, sys, wind, name} = data;
    const {humidity, pressure, temp} = main; 
    const {country} = sys;
    const { speed } = wind;
    
    resultsContainerElem.innerHTML += `
        <section class="results-box">
            <div class="results-item">
                <p class="title">City</p>
                <p class="value">${name}, ${country}</p>
            </div>
            <div class="results-item">
                <p class="title">Humedad</p>
                <p class="value">${humidity}</p>                
            </div>
            <div class="results-item">
                <p class="title">Temperatura</p>
                <p class="value">${temp} kelvin</p>   
            </div>
            <div class="results-item">
                <p class="title">Pressure</p>
                <p class="value">${pressure}</p>   
            </div>
            <div class="results-item">
                <p class="title">Speed Wind</p>
                <p class="value">${speed}</p>   
            </div>
        </section>
        `;
}



buttonElement.addEventListener('click', async () => { 
    const {value} = inputElement;
    // fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?appid=${API_ID}&q=${value}`
    // ).then((response) => {
    //         return response.json();
    // }).then(data => {
    //     printResults(data);
    // }).catch((err) => {
    //     console.log(err)
    // });
    try {
        const response = await window.fetch(
            `https://api.openweathermap.org/data/2.5/weather?appid=${API_ID}&q=${value}`
        );
        const data = await response.json();
        printResults(data);
    }catch(error){
        console.log("ERROR", error);
    }
});

//Funcion que se ejecuta luego de 2 segundos 
//setTimeout(() => {
//    titleElement.textContent = 'Hola mundo'
//    titleElement.style = 'background-color: red;'
//
//}, 2000)


