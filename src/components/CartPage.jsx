import React, { PureComponent } from "react";
import "../style/cart.scss";
import Cart from "./Cart";

class CartPage extends PureComponent {
  render() {
    return (
      <div className="cart">
        <h2>CART</h2>
        <Cart isOverlay={false} />
      </div>
    );
  }
}

export default CartPage;
