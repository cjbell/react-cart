"use strict";

var React = require("react");
var Product = require("./product");

var ProductsList = React.createClass({

  render: function() {
    return (
      <ol className="products-list">
        {this.props.products.map(function(p) {
          return (
            <Product key={p.id}
              product={p}
              addToCart={this.props.addToCart} />
          );
        }, this)}
      </ol>
    );
  }

});

module.exports = ProductsList;