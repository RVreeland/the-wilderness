'use strict';

var Item = require('./itemModel.js');

module.exports = {

  newItem: function(req, res, next) {
    var item = req.body.item;
    Item.create(item);
  }

};
