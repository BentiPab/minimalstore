import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { connect } from "react-redux";
import Modal from "./Modal";
import changeOverlay from "./../ActionCreators/changeOverlay";
import { addItem } from "./../ActionCreators/changeCart";
import Attribute from "./Attribute";
import CategoryPageAddCartActions from "./CategoryPageAddCartActions";

class CategoryPageAddCart extends Component {
  state = {
    attributes: [],
    allAttributesSelected: false,
  };

  addAttribute = (e) => {
    e.preventDefault();
    const newAttributes = this.state.attributes.filter(
      (attribute) => attribute.id !== e.target.name
    );
    newAttributes.push({
      index: e.target.dataset.order,
      id: e.target.name,
      value: e.target.value,
      type: e.target.dataset.type,
    });

    newAttributes.sort((a, b) => a.index - b.index);
    this.setState({ attributes: newAttributes });
  };

  getPrice = () => {
    const { prices } = this.props.modalProduct.product;
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
      this.setState({ allAttributesSelected: true });
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
      this.props.showModal();
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
    const { product } = this.props.modalProduct;
    const { currency, showModal } = this.props;
    const price = this.getPrice();

    return (
      <Modal>
        <div className="overlay">
          <OutsideClickHandler onOutsideClick={showModal}>
            <div className="attributes-container add-modal">
              {product.attributes.map((attribute, index) => (
                <Attribute
                  index={index}
                  key={attribute.id}
                  addAttribute={this.addAttribute}
                  attribute={attribute}
                />
              ))}
              <CategoryPageAddCartActions
                currency={currency}
                price={price}
                showModal={showModal}
                addToCart={this.handleAddToCart}
                product={product}
              />
            </div>
          </OutsideClickHandler>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  changeOverlay: (state) => dispatch(changeOverlay(state)),
  addItem: (cart, item) => dispatch(addItem(cart, item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPageAddCart);
