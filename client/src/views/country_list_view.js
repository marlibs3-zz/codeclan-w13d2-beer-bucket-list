const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const CountryView = require('./country_view.js');


const CountryListView = function (htmlContainer){
  this.htmlContainer = htmlContainer;
};

CountryListView.prototype.bindEvents = function () {
  PubSub.subscribe('CountrySelectView:selected-country', (evt) => {
  this.createNewCountryView(evt.detail)
  console.log('list-view-selected-country:', evt.detail);
  });
};

CountryListView.prototype.createNewCountryView = function (country) {
  const countryViewObject = new CountryView(this.htmlContainer);
  countryViewObject.render(country);
  console.log('selected-country:' , country);
}



module.exports = CountryListView;
