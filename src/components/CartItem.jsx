import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CartItemActions from "./CartItemActions";
import CartItemDescription from "./CartItemDescription";

class CartItem extends PureComponent {
  
  getItemPrice = (product) => {
    const { prices } = product;
    const { currency } = this.props;
    const priceCurrency = prices.filter((price) => price.currency === currency);
    return priceCurrency[0].amount;
  };

  render() {
    const { currency, cart, id, product } = this.props;
    const itemPrice = this.getItemPrice(product);
    return (
      <div className="cart-item">
        <CartItemDescription
          itemPrice={itemPrice}
          prodName={product.name}
          productDescription={product.description}
          currency={currency}
          attributes={product.attributes}
          brand={product.brand}
        />
        <CartItemActions
          cart={cart}
          prodQty={product.qty}
          gallery={product.gallery}
          id={id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(CartItem);
