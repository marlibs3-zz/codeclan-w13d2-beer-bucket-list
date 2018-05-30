const PubSub = require('../helpers/pub_sub.js');

const CountrySelectView = function (selectElement) {
  this.selectElement = selectElement;
};

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    this.populateSelect(evt.detail);
  });
};

CountrySelectView.prototype.populateSelect = function (data) {
  data.forEach((country) => {
    this.createOption(country);
  });
};

CountrySelectView.prototype.createOption = function (country) {
  const option = document.createElement('option');
  option.textContent = country.name;
  option.value = country.id;
  this.selectElement.appendChild(option);
};

module.exports = CountrySelectView;
