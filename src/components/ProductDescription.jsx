import React, { PureComponent } from "react";
import ProductActions from "./ProductActions";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

class ProductDescription extends PureComponent {
  purifyDescription = (description) => {
    const clean = DOMPurify.sanitize(description);
    const prodDescription = parse(clean);
    return prodDescription;
  };

  render() {
    const { product, toggleModal } = this.props;
    const { brand, name } = this.props.product;
    const description = this.purifyDescription(product.description);

    return (
      <div className="product-description">
        <h2>{brand}</h2>
        <h3>{name}</h3>
        <ProductActions
          toggleModal={toggleModal}
          product={product}
          handleAddToCart={this.handleAddToCart}
        />
        {description}
      </div>
    );
  }
}

export default ProductDescription;
