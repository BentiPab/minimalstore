import "../style/productPage.scss";
import { withRouter } from "react-router";
import React, { PureComponent } from "react";
import AttributesModal from "./AttributesModal";
import { Query } from "@apollo/react-components";
import client from "../GraphQl/client";
import { GET_PRODUCT_BY_ID } from "./../GraphQl/Queries/getProductById";
import Loading from "./Loading";

import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";

class ProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prodId: this.props.match.params.id,
      showModal: false,
      showAddToCart: false,
    };
  }

  toggleModal = (state) => {
    this.setState({ showModal: state });
  };

  renderItems = (loading, data, error) => {
    const { showModal } = this.state;

    if (!data) {
      this.renderNoItems(loading, error);
    } else {
      const { product } = data;
      return (
        <div className={`product-page-container`}>
          <ProductImages product={product} />
          <ProductDescription product={product} />
          {showModal ? (
            <AttributesModal toggleModal={this.toggleModal} />
          ) : null}
        </div>
      );
    }
  };

  renderNoItems = (loading, error) => {
    if (error) {
      return <p>error</p>;
    } else if (loading) {
      return <Loading />;
    }
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <Query
        client={client}
        query={GET_PRODUCT_BY_ID}
        variables={{ id: `${id}` }}
      >
        {({ loading, data, error }) => {
          return (
            <React.Fragment>
              {this.renderItems(loading, data, error)}
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

const ProductPageWithRouter = withRouter(ProductPage);

export default ProductPageWithRouter;
