var mongoose = require('mongoose');

var contractSchema = new mongoose.Schema({
  seller: String,
  buyer: String,
  item_id: String,
  startDate: Date,
  endDate: Date
});

var Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
