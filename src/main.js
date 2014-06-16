/** @jsx React.DOM */

var React = require("react");
var ProductsList = require("./products-list");
var Cart = require("./cart/cart");

var products = [
  { id: 1, name: "Test #1", price: 19.99 },
  { id: 2, name: "Test #2", price: 29.99 },
  { id: 3, name: "Test #3", price: 39.99 },
  { id: 4, name: "Test #4", price: 49.99 },
  { id: 5, name: "Test #5", price: 59.99 },
  { id: 6, name: "Test #6", price: 69.99 },
];

React.renderComponent(<Cart />,
                      document.getElementById("site-header"));

React.renderComponent(<ProductsList products={products} />,
                      document.getElementById("site-content"));