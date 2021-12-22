import React, { PureComponent } from "react";
import "../style/productCard.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProductCard extends PureComponent {
  state = {
    stock: this.props.product.inStock,
  };

  renderOutOfStock = (stock) => {
    if (!stock) {
      return <h1>OUT OF STOCK</h1>;
    }
  };

  renderPrice = () => {
    const { prices } = this.props.product;
    const { currency } = this.props;
    const priceCurrency = prices.filter((price) => price.currency === currency);
    const priceAmount = priceCurrency[0].amount;
    return <p className={`${currency} product-price`}>{priceAmount}</p>;
  };

  render() {
    const { stock } = this.state;
    const { product } = this.props;
    return (
      <Link to={`/products/${product.category}/${product.id}`}>
        <div className={`product-card ${!stock ? "no-stock" : ""}`}>
          {this.renderOutOfStock(stock)}
          <img src={product.gallery[0]} alt="main-img" />
          <div>
            <p className="product-name">{product.name}</p>
            <p className="product-brand">{product.brand}</p>
            {this.renderPrice()}
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(ProductCard);
