const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const countriesRouter = require('./countries_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('countries');
  const countriesCollection = db.collection('countriesToVisit');
  router.use('/api/countriesToVisit', countriesRouter(countriesCollection));
});

module.exports = router;
