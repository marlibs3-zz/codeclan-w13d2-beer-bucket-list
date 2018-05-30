const CountryListView = require('./views/country_list_view.js');
const CountrySelectView = require('./views/country_select_view.js');
const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.querySelector('#countries-select');
  const countrySelectView = new CountrySelectView(countrySelect);
  countrySelectView.bindEvents();



  const countryList = document.querySelector('#country-list');
  const countryListView = new CountryListView(countryList);
  countryListView.bindEvents();

  const countriesURL = 'http://localhost:3000/api/countriestovisit'
  const countries = new Countries(countriesURL);
  // countries.bindEvents();
  countries.getData();

});
