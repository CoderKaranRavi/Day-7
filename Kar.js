// Function to fetch the country data
async function fetchCountryData() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response.data;
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  }
  
  // Problem 1: Get all the countries from Asia continent/region using Filter function
  async function getCountriesInAsia() {
    const countries = await fetchCountryData();
    const asianCountries = countries.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asianCountries.map(country => country.name.common));
  }
  
  // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
  async function getCountriesWithLowPopulation() {
    const countries = await fetchCountryData();
    const lowPopulationCountries = countries.filter(country => country.population < 200000); // Assuming "lakh" is 100,000
    console.log('Countries with population less than 2 lakhs:', lowPopulationCountries.map(country => country.name.common));
  }
  
  // Problem 3: Print the following details name, capital, flag, using forEach function
  async function printCountryDetails() {
    const countries = await fetchCountryData();
    countries.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.png);
      console.log('-------------------------');
    });
  }
  
  // Problem 4: Print the total population of countries using reduce function
  async function printTotalPopulation() {
    const countries = await fetchCountryData();
    const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of all countries:', totalPopulation);
  }
  
  // Problem 5: Print the country that uses US dollars as currency
  async function findCountryWithUSD() {
    const countries = await fetchCountryData();
    const countryWithUSD = countries.find(country =>
      country.currencies && country.currencies.USD
    );
    if (countryWithUSD) {
      console.log('Country using US dollars as currency:', countryWithUSD.name.common);
    } else {
      console.log('No country uses US dollars as currency.');
    }
  }
  
  // Call the functions to solve the problems
  getCountriesInAsia();
  getCountriesWithLowPopulation();
  printCountryDetails();
  printTotalPopulation();
  findCountryWithUSD();