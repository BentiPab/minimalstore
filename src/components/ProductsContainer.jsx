import React, { PureComponent } from "react";
import ProductCard from "./ProductCard";
import CategoryPageAddCart from "./CategoryPageAddCart";

class ProductsContainer extends PureComponent {
  renderModal = (showAddToCart) => {
    if (showAddToCart) {
      const { modalProduct, addToCart } = this.props;
      return (
        <CategoryPageAddCart
          showModal={addToCart}
          modalProduct={modalProduct}
        />
      );
    }
  };

  renderAddCart = (inStock, product) => {
    const { addToCart } = this.props;
    if (inStock) {
      return (
        <div
          key={product.id}
          onClick={() => addToCart({ product })}
          className="add-cart"
        ></div>
      );
    }
  };


  
  render() {
    const { showAddToCart, products } = this.props;

    return (
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card-container">
            {this.renderAddCart(product.inStock, product)}
            <ProductCard key={product.name} product={product} />
          </div>
        ))}
        {this.renderModal(showAddToCart)}
      </div>
    );
  }
}

export default ProductsContainer;
