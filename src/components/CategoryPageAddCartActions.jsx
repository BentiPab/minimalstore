import React, { Component } from "react";

class CategoryPageAddCartActions extends Component {
  render() {
    const { currency, price, addToCart, product, showModal } = this.props;
    return (
      <React.Fragment>
        <h4>Price:</h4>
        <h3 className={currency}>{price}</h3>
        <div className="action-buttons">
          <button onClick={(e) => addToCart(e, product)}>Add To Cart</button>
          <button onClick={showModal}>Cancel</button>
        </div>
        <p>Please select all attributes</p>
      </React.Fragment>
    );
  }
}

export default CategoryPageAddCartActions;
