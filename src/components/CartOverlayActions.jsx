import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class CartOverlayActions extends PureComponent {
  renderButtons = (isOverlay) => {
    const { showCart } = this.props;
    if (!isOverlay) {
      return <Link to="/checkout">checkout</Link>;
    }

    return (
      <React.Fragment>
        <Link to="/cart" onClick={showCart}>
          view bag
        </Link>
        <Link to="/checkout">checkout</Link>
      </React.Fragment>
    );
  };

  render() {
    const { currency, isOverlay, totalAmount } = this.props;

    return (
      <React.Fragment>
        <div className="cart-overlay-total">
          <h3>Total</h3>
          <h3 className={currency}>{totalAmount}</h3>
        </div>
        <div className="cart-overlay-actions">
          {this.renderButtons(isOverlay)}
        </div>
      </React.Fragment>
    );
  }
}

export default CartOverlayActions;
