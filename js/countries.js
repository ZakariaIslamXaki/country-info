const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();
const displayCountries = countries => {
    const countriesDiv = document.getElementById('country');
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital}</p>
            <button onclick="countryDetails('${country.name.common}')">Show Details</button>
        `
        countriesDiv.appendChild(div);

    });
}

const countryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>Country Name: ${country.name.common}</h5>
    <p>Population: ${country.population}</p>
    <p>Continent: ${country.continents}</p>
    <p>Region: ${country.subregion}</p>
    <p>Timezone: ${country.timezones}</p>
    <img width="200px" src="${country.flags.png}">
    `
}
