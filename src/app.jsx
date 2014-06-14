var React = require("react");
var ProductsList = require("./products-list");
var Cart = require("./cart");
var CartManager = require("./cart-manager");
var merge = require("react/lib/merge");
var EventEmitter = require("events").EventEmitter;

var cartManager = new CartManager();
var mediator = merge({}, EventEmitter.prototype);

var App = React.createClass({

  getInitialState: function() {
    return {
      cartItems: cartManager.items,
      cartTotal: cartManager.total,
      itemsInCart: cartManager.totalItems
    }
  },

  componentDidMount: function() {
    mediator.on("cart:add", this.addToCart.bind(this));
  },

  componentWillUnmount: function() {
    mediator.off("cart:add");
  },

  addToCart: function(product) {
    cartManager.addItem(product);

    this.setState({
      cartItems: cartManager.items,
      cartTotal: cartManager.total,
      itemsInCart: cartManager.totalItems
    });
  },

  render: function() {
    return (
      <div>
        <header className="site-header">
          {<Cart cartItems={this.state.cartItems}
                 cartTotal={this.state.cartTotal}
                 itemsInCart={this.state.itemsInCart} />}
        </header>
        <section className="products">
          {<ProductsList mediator={mediator}
                         products={this.props.products} />}
        </section>
      </div>
    );
  }

});

module.exports = App;