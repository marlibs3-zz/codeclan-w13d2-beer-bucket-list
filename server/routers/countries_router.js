const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const countriesRouter = function (countriesCollection) {

  router.get('/', function (req, res) {
    countriesCollection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    countriesCollection
      .findOne({ _id: ObjectID(id) })
      .then((docs) => res.json(docs));
  });

  return router;

};

module.exports = countriesRouter;
