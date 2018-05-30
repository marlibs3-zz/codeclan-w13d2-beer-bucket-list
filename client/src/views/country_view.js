const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountryView = function(container) {
  this.container = container;
};

CountryView.prototype.render = function (country) {

  const countryContainer = document.createElement('div');

  const name = this.createName(country.name);
  this.container.appendChild(name);

  const capital = this.createCapital(country.capital);
  this.container.appendChild(capital);

  const region = this.createRegion(country.region);
  this.container.appendChild(region);

  const population = this.createPopulation(country.population);
  this.container.appendChild(population);

  this.container.appendChild(countryContainer);
};

CountryView.prototype.createName = function (name) {
  const element = document.createElement('h2');
  element.textContent = name;
  return element;
};

CountryView.prototype.createCapital = function (capital) {
  const element = document.createElement('h4');
  element.textContent = capital;
  return element;
};

CountryView.prototype.createRegion = function (region) {
  const element = document.createElement('p');
  element.textContent = region;
  return element;
};

CountryView.prototype.createPopulation = function (population) {
  const element = document.createElement('p');
  element.textContent = population;
  return element;
};

module.exports = CountryView;
