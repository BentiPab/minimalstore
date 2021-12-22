import React, { Component } from "react";

class CartItemDescription extends Component {
  renderSwatch = (attribute) => {
    console.log(attribute.displayValue);
    return <p className={attribute.displayValue} key={attribute.id}></p>;
  };

  renderAttributes = (attribute) => {
    if (attribute.type === "swatch") {
      console.log(attribute.type);
      return this.renderSwatch(attribute);
    }

    return (
      <p key={attribute.id}>
        {attribute.id}: {attribute.value}
      </p>
    );
  };

  render() {
    const { brand, prodName, currency, attributes, itemPrice } = this.props;

    return (
      <div className="cart-item-description">
        <h3>{brand}</h3>
        <h3>{prodName}</h3>
        <h4 className={currency}>{itemPrice}</h4>
        {attributes.map((attribute) => this.renderAttributes(attribute))}
      </div>
    );
  }
}

export default CartItemDescription;
