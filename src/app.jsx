var React = require("react");
var ProductsList = require("./products-list");
var Cart = require("./cart");
var CartManager = require("./cart-manager");

var cartManager = new CartManager();

var App = React.createClass({

  getInitialState: function() {
    return {
      cartItems: cartManager.items,
      cartTotal: cartManager.total
    }
  },

  addToCart: function(product) {
    cartManager.addItem(product);

    this.setState({
      cartItems: cartManager.items,
      cartTotal: cartManager.total
    });
  },

  render: function() {
    return (
      <div>
        <header className="site-header">
          {<Cart cartItems={this.state.cartItems}
                 cartTotal={this.state.cartTotal} />}
        </header>
        <section className="products">
          {<ProductsList addToCart={this.addToCart}
                         products={this.props.products} />}
        </section>
      </div>
    );
  }

});

module.exports = App;