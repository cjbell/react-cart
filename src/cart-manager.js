"use strict";

var merge = require("react/lib/merge");

function findItemIndex(items, item) {
  var index = -1;
  items.forEach(function(p, i){
    if (p.id == item.id) {
      index = i;
    }
  });
  return index;
}

var CartManager = function() {
  this.items = [];
  this.total = 0;
  this.totalItems = 0;

  this.addItem = function (product) {
    var existingIndex  = findItemIndex(this.items, product);

    if (existingIndex == -1) {
      this.items.push(merge({ quantity: 1 }, product));
    } else {
      this.items[existingIndex].quantity += 1;
    }

    this.total = this.total + product.price;
    this.totalItems++;
  };

  this.reset = function() {
    this.total = 0;
    this.items = [];
  };
};

module.exports = CartManager;