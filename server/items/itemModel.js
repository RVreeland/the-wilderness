var mongoose = require('mongoose');

var ItemSchema = new mongoose.schema({
  name: String,
  type: String,
  category: String,
  weight: Number,
  quantity: Number,
  packs: Array
});

module.exports = mongoose.model('Item', ItemSchema);
