use countries;
db.dropDatabase();

db.countriesToVisit.insertMany([
  {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    population: 27657145
  },

  {
    name: "Greenland",
    capital: "Nuuk",
    region: "Americas",
    population: 55847
  },

  {
    name: "Seychelles",
    capital: "Victoria",
    region: "Africa",
    population: 91400
  },

  {
    name: "Portugal",
    capital: "Lisbon",
    region: "Europe",
    population: 10374822
  }

]);
