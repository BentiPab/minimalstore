import { withRouter } from "react-router";
import "../style/categoryPage.scss";
import React, { PureComponent } from "react";
import { GET_PRODUCTS_BY_CATEGORY } from "../GraphQl/Queries/getProductsByCategory";
import { Query } from "@apollo/react-components";
import client from "../GraphQl/client";
import { connect } from "react-redux";
import changeOverlay from "./../ActionCreators/changeOverlay";
import ProductsContainer from "./ProductsContainer";

class Products extends PureComponent {
  state = {
    category:
      this.props.match.params.category === "all"
        ? ""
        : this.props.match.params.category,
    showAddToCart: false,
    categoryName: "all",
    modalProduct: [],
  };

  componentDidUpdate() {
    const { category } = this.props.match.params;
    if (this.state.category !== category) {
      if (category === "all") {
        this.setState({ category: "", categoryName: "all" });
      } else this.setState({ category, categoryName: category });
    }
  }

  handleAddToCart = (product) => {
    const { changeOverlay, overlay } = this.props;
    const { showAddToCart } = this.state;
    this.setState({ showAddToCart: !showAddToCart, modalProduct: product });
    changeOverlay(!overlay);
  };

  renderItems = (loading, data, error) => {
    if (!data) {
      this.renderNoItems(loading, error);
    } else {
      const { products } = data.category;
      const { showAddToCart, modalProduct } = this.state;

      return (
        <ProductsContainer
          products={products}
          addToCart={this.handleAddToCart}
          showAddToCart={showAddToCart}
          modalProduct={modalProduct}
        />
      );
    }
  };

  renderNoItems = (loading, error) => {
    if (loading) {
      return <ProductsContainer />
    } else if (error) {
      return <p>error</p>;
    }
  };

  render() {
    const { category, categoryName } = this.state;
    return (
      <Query
        client={client}
        query={GET_PRODUCTS_BY_CATEGORY}
        variables={{ category: { title: `${category}` } }}
      >
        {({ loading, data, error }) => {
          return (
            <div className={`category-page-container`}>
              <h2>Category - {categoryName}</h2>
              {this.renderItems(loading, data, error)}
            </div>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  overlay: state.overlay,
});

const mapDispatchToProps = (dispatch) => ({
  changeOverlay: (state) => dispatch(changeOverlay(state)),
});

const CategoryPageWithRouter = withRouter(Products);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPageWithRouter);
