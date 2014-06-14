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
              mediator={this.props.mediator} />
          );
        }, this)}
      </ol>
    );
  }

});

module.exports = ProductsList;