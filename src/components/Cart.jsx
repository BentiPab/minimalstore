import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import CartOverlayActions from "./CartOverlayActions";

class Cart extends Component {
  
  getTotalAmount = () => {
    const { currency, cart } = this.props;
    let total = 0;
    cart.forEach(({ product }) => {
      const prices = product.prices.filter(
        (price) => price.currency === currency
      );
      total += prices[0].amount * product.qty;
    });
    return total.toFixed(2);
  };

  renderNoItems = () => {
    return <h2>No items in the bag</h2>;
  };

  renderItems = () => {
    const { currency, showCart, cart, isOverlay } = this.props;
    const totalAmount = this.getTotalAmount();

    if (!cart.length) {
      this.renderNoItems();
    }

    return (
      <React.Fragment>
        <h2>My Bag, {cart.quantity} item/s</h2>
        {cart.map(({ product, id }, index) => (
          <CartItem
            key={`${product}-${index}`}
            product={product}
            id={id}
            cart={cart}
          />
        ))}
        <CartOverlayActions
          totalAmount={totalAmount}
          showCart={showCart}
          isOverlay={isOverlay}
          currency={currency}
        />
      </React.Fragment>
    );
  };

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps)(Cart);
