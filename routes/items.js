var express = require('express');
var router = express.Router();
var db = require('./../models');

//***********
//** INDEX **
//***********

router.get('/items', function (req, res, next) {
  db.Items.find({}).then(function (results) {
    res.render('items/index', {items: results});
  }).catch(function (err) {
    res.render('404');
  });
});


//***********
//** NEW   **
//***********

router.get('/items/new', function (req, res, next) {
  res.render('items/new');
});

//***********
//** SHOW  **
//***********

router.get('/items/:id', function (req, res, next) {
  db.Items.findById(req.params.id).then(function (result) {
    res.render('items/show', {item: result});
  }).catch(function (err) {
    res.render('404');
  });
});

//***********
//** CREATE**
//***********

router.post('/items', function (req, res, next) {
  db.Items.create({
    name: req.body.name;
    description: req.body.description;
    brand: req.body.brand;
    purchaseDate: req.body.purchaseDate;
    condition: req.body.condition;
    categories: req.body.categories;
    availability: [
      {startDate: startDate, endDate: endDate}
    ]
  }).then(function (result) {
    res.redirect('/items');
  }).catch(function (err) {
    res.render('404');
  });
});

//***********
//** EDIT  **
//***********

router.get('/items/:id/edit', function (req, res, next) {
  db.Items.findById(req.params.id).then(function (result) {
    res.render('items/edit', {item: result});
  }).catch(function (err) {
    res.render('404');
  });
});

//***********
//** UPDATE**
//***********

router.post('/items/:id', function (req, res, next) {
  db.Items.create({
    name: req.body.name;
    description: req.body.description;
    brand: req.body.brand;
    purchaseDate: req.body.purchaseDate;
    condition: req.body.condition;
    categories: req.body.categories;
    availability: [
      {startDate: startDate, endDate: endDate}
    ]
  }).then(function (result) {
    res.redirect('/items/'+req.params.id);
  }).catch(function (err) {
    res.render('404');
  });
});

//***********
//** DELETE**
//***********

router.post('/items/:id/delete', function (req, res, next) {
  db.Items.findByIdAndRemove(req.params.id).then(function () {
    res.redirect('/items');
  }).catch(function (err) {
    res.render('404');
  });
});

module.exports = router;
