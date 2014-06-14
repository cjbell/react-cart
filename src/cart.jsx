"use strict";

var React = require("react");

var Cart = React.createClass({

  render: function() {
    return (
      <div className="cart">
        <span className="cart__summary">You have {this.props.cartItems.length} items in your cart</span><br />
        <span className="cart__total">Total: £{this.props.cartTotal.toFixed(2)}</span>
      </div>
    );
  }

});

module.exports = Cart;