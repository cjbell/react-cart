var CartManager = function() {
  this.items = [];
  this.total = 0;

  this.addItem = function (product) {
    this.items.push(product);
    this.total = this.total + product.price;
  };

  this.reset = function() {
    this.total = 0;
    this.items = [];
  };
};

module.exports = CartManager;