import Attribute from "./Attribute";
import React, { PureComponent } from "react";
import "../style/productActions.scss";
import { connect } from "react-redux";
import { addItem } from "./../ActionCreators/changeCart";

class ProductActions extends PureComponent {
  state = {
    attributes: [],
  };

  addAttribute = (e) => {
    e.preventDefault();
    const { dataset, name, value, id } = e.target;
    const newAttributes = this.state.attributes.filter(
      (attribute) => attribute.id !== e.target.name
    );
    newAttributes.push({
      index: dataset.order,
      id: name,
      value: value,
      type: dataset.type,
      displayValue: id,
    });

    newAttributes.sort((a, b) => a.index - b.index);
    this.setState({ attributes: newAttributes });
  };

  getPrice = () => {
    const { prices } = this.props.product;
    const { currency } = this.props;
    const amount = prices.filter((price) => price.currency === currency);
    return amount[0].amount;
  };

  handleAddToCart = (e, product) => {
    const { attributes } = this.state;
    const newProduct = { ...product };
    e.preventDefault();
    const cart = this.props.cart;
    if (attributes.length !== product.attributes.length) {
      this.props.toggleModal(true);
    } else {
      newProduct.attributes = attributes;
      newProduct.qty = 1;
      const newAttributesToString = this.newItemAttributesToString(
        newProduct.attributes
      );
      this.props.addItem(cart, {
        product: newProduct,
        id: newProduct.id + newAttributesToString + newProduct.qty,
      });
    }
  };

  newItemAttributesToString = (attributes) => {
    const attributesArray = [];
    attributes.forEach((attribute) => {
      attributesArray.push(attribute.value);
    });
    return attributesArray.toString();
  };

  render() {
    const { currency, product } = this.props;
    const price = this.getPrice();
    const buttonText = product.inStock ? "Add To Cart" : "No Stock";
    return (
      <div className="attributes-container">
        {product.attributes.map((attribute, index) => (
          <Attribute
            index={index}
            key={attribute.id}
            addAttribute={this.addAttribute}
            attribute={attribute}
          />
        ))}
        <h4>Price:</h4>
        <h3 className={currency}>{price}</h3>

        <button
          disabled={product.inStock ? false : true}
          onClick={(e) => this.handleAddToCart(e, product)}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (cart, item) => dispatch(addItem(cart, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductActions);
