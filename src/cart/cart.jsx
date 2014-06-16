"use strict";

var React = require("react");
var CartItems = require("./cart-items");
var CartManager = require("./cart-manager");
var events = require("../events");

var cartManager = new CartManager();

var Cart = React.createClass({

  getInitialState: function() {
    return cartManager.toState();
  },

  componentDidMount: function() {
    events.on("cart:add", this.addToCart);
  },

  componentWillUnmount: function() {
    events.off("cart:add");
  },

  addToCart: function(product) {
    cartManager.addItem(product);
    this.setState(cartManager.toState());
  },

  render: function() {
    return (
      <div className="cart">
        <span className="cart__summary">You have {this.state.totalItems} items in your cart</span><br />
        <span className="cart__total">Total: £{this.state.total.toFixed(2)}</span>
        <div className="cart__items">{<CartItems items={this.state.items} />}</div>
      </div>
    );
  }

});

module.exports = Cart;