import React, { PureComponent } from 'react';

class CartItemQuantity extends PureComponent {
    render() {
        const {prodQty, updateQty, id, cart} = this.props
        return (
            <div className="cart-item-quantity">
          <button onClick={() => updateQty("PLUS", id, cart)}>+</button>
          <p>{prodQty}</p>
          <button
            disabled={prodQty === 0 ? true : false}
            onClick={() => updateQty("MINUS", id, cart)}
          >
            -
          </button>
        </div>
        );
    }
}

export default CartItemQuantity;