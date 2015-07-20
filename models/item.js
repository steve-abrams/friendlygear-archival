var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  purchaseDate: Date,
  condition: String,
  categories: [{category: String}],
  availability: [{startDate: Date, endDate: Date}]
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;
