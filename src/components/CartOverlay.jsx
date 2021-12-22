import React, { PureComponent } from "react";
import Cart from "./Cart";
import "../style/cart.scss";
import Modal from "./Modal";
import OutsideClickHandler from "react-outside-click-handler";

class CartOverlay extends PureComponent {
  render() {
    const { showCart } = this.props;

    return (
      <Modal>
        <div className="overlay">
          <OutsideClickHandler onOutsideClick={showCart}>
            <div className={`cart-overlay`}>
              <Cart isOverlay={true} showCart={showCart} />
            </div>
          </OutsideClickHandler>
        </div>
      </Modal>
    );
  }
}

export default CartOverlay;
