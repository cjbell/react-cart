"use strict";

var React = require("react");
var events = require("./events");

var Product = React.createClass({

  render: function() {
    return (
      <li className="products-list__product" data-id={this.props.product.id}>
        <h1 className="products-list__product__name">{this.props.product.name}</h1>
        <span className="products-list__product__price">£{this.props.product.price}</span>
        <button type="button"
                className="products-list__product__add-to-cart"
                onClick={this.handleAddToCartClick}>
          Add to cart
        </button>
      </li>
    );
  },

  handleAddToCartClick: function() {
    events.emit("cart:add", this.props.product);
  }

});

module.exports = Product;