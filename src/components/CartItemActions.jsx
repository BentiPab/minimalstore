import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem, updateQty } from "../ActionCreators/changeCart";
import CartItemGallery from "./CartItemGallery";
import CartItemQuantity from "./CartItemQuantity";

class CartItemActions extends Component {


  render() {
    const { prodQty, updateQty, removeItem, id, cart, gallery } = this.props;

    return (
      <div className="cart-item-qtyimg">
        <CartItemQuantity prodQty={prodQty} updateQty={updateQty} id={id} cart={cart} />
        
        <CartItemGallery gallery={gallery}/>
        <div>
          <button onClick={() => removeItem(cart, id)} className="remove">
            X
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateQty: (action, id, cart) => dispatch(updateQty(action, id, cart)),
  removeItem: (cart, id) => dispatch(removeItem(cart, id)),
});

export default connect(null, mapDispatchToProps)(CartItemActions);
