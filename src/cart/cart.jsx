"use strict";

var React = require("react");
var CartItems = require("./cart-items");
var CartManager = require("./cart-manager");

var cartManager = new CartManager();

var Cart = React.createClass({

  getInitialState: function() {
    return {
      items: cartManager.items,
      total: cartManager.total,
      totalItems: cartManager.totalItems
    }
  },

  componentDidMount: function() {
    this.props.mediator.on("cart:add", this.addToCart);
  },

  componentWillUnmount: function() {
    this.props.mediator.off("cart:add");
  },

  addToCart: function(product) {
    cartManager.addItem(product);

    this.setState({
      items: cartManager.items,
      total: cartManager.total,
      totalItems: cartManager.totalItems
    });
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