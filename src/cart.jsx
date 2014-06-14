"use strict";

var React = require("react");
var CartItems = require("./cart-items");

var Cart = React.createClass({

  render: function() {
    return (
      <div className="cart">
        <span className="cart__summary">You have {this.props.itemsInCart} items in your cart</span><br />
        <span className="cart__total">Total: £{this.props.cartTotal.toFixed(2)}</span>
        <div className="cart__items">{<CartItems items={this.props.cartItems} />}</div>
      </div>
    );
  }

});

module.exports = Cart;