const form = document.forms[0];
const input = document.querySelector('.search-input');


form.addEventListener('click', (e) => {

    e.preventDefault();

    // const inputValue = input.value;
    const inputValue = 'india';

    const url = `https://restcountries.com/v3.1/name/${inputValue}?fullText=true`;

    fetch(url)
        .then(res => res.json())
        .then(data => showData(data[0]))
        .catch(() => {
            console.log('not found');
        })

});


function showData(data) {
    console.log(data);
    console.log(data.capital[0]);
    console.log(data.population);
    console.log(data.flags.svg);
    console.log(data.independent ? 'Independent' : 'Unindependent');
    
}