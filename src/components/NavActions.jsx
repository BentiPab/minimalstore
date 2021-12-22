import React, { PureComponent } from "react";
import CurrencySelector from "./CurrencySelector";
import CartOverlay from "./CartOverlay";
import { connect } from "react-redux";
import changeOverlay from "./../ActionCreators/changeOverlay";

class NavActions extends PureComponent {
  state = {
    showCurrencies: false,
    showModal: false,
    quantity: 0,
  };

  handleShowCurrencies = () => {
    this.setState({ showCurrencies: !this.state.showCurrencies });
  };

  handleShowCart = () => {
    const { overlay, changeOverlay } = this.props;
    this.setState({ showModal: !this.state.showModal });
    changeOverlay(!overlay);
  };

  renderCartQuantity = () => {
    const { length, quantity } = this.props.cart;

    if (length) {
      return <div className="cart-overlay-qty">{quantity}</div>;
    }
  };

  renderCurrencies = () => {
    const { showCurrencies } = this.state;

    if (showCurrencies) {
      return (
        <CurrencySelector
          handleShowCurrencies={this.handleShowCurrencies}
          show={showCurrencies}
        />
      );
    }
  };

  renderCartOverlay = () => {
    const { showModal } = this.state;

    if (showModal) {
      return <CartOverlay showCart={this.handleShowCart} />;
    }
  };

  render() {
    const { currency } = this.props;
    const { showCurrencies } = this.state;
    return (
      <ul className="navActions">
        <li
          onClick={() => this.handleShowCurrencies()}
          className={`${currency} `}
        >
          <div
            className={`dropdown ${showCurrencies ? "dropdown-active" : ""}`}
          ></div>
        </li>

        <div className="nav-toggler">{this.renderCurrencies()}</div>

        <li className="cart-logo" onClick={this.handleShowCart}>
          {this.renderCartQuantity()}
        </li>

        <div className="cart-toggler">{this.renderCartOverlay()}</div>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
  overlay: state.overlay,
});

const mapDispatchToProps = (dispatch) => ({
  changeOverlay: (state) => dispatch(changeOverlay(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavActions);
