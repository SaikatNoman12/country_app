const form = document.forms[0];
const inputData = document.querySelector('.search-input');
const details = document.querySelector('.details');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const inputValue = inputData.value.toLowerCase();

    if (inputValue === '' || inputValue.trim() === '') {
        console.log('please fill your input!');
    }
    else {

        const countryName = `https://restcountries.com/v3.1/name/${inputValue}?fullText=true`;

        fetch(countryName)
            .then(res => res.json())
            .then(data => showData(data[0]))
            .catch(() => {

            })


    }

});


function showData(data) {

    details.innerHTML =
        `<div class="flag-country-name">
        <div class="flag">
            <img src="${data.flags.svg}" alt="${data.name.common.toLowerCase()}">
        </div>
        <div class="country-name">
            <h1>${data.name.common}</h1>
        </div>
        </div>

        <div class="info">

            <div class="column">
                <h2>Capital:</h2>
                <span>${data.continents[0]}</span>
            </div>

            <div class="column">
                <h2>Population:</h2>
                <span>${data.population}</span>
            </div>

            <div class="column">
                <h2>Currencies:</h2>
                <span>${data.currencies[Object.keys(data.currencies)].name}</span>
            </div>


            <div class="column">
                <h2>Languages:</h2>
                <span>${Object.values(data.languages).toString().split(',').join(', ')}</span>
            </div>

            <div class="column">
                <h2>Self-reliant::</h2>
                <span>${data.independent ? 'Independent' : 'Unindependent'}</span>
            </div>

        </div>`;

}