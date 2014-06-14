var React = require("react");

var CartItems = React.createClass({

  render: function() {
    return (
      <ol className="cart__items__list">
        {this.props.items.map(function(item){
          return (<li>{item.quantity} x {item.name} (£{item.price})</li>)
        }, this)}
      </ol>
    );
  }

});

module.exports = CartItems;