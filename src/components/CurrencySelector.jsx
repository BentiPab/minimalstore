import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { GET_CURRENCIES } from "../GraphQl/Queries/getCurrencies";
import changeCurrency from "./../ActionCreators/changeCurrency";
import withQuery from "./withQuery";
import OutsideClickHandler from "react-outside-click-handler";
import Modal from "./Modal";
import "../style/currencySelector.scss";

class CurrencySelector extends PureComponent {
  updateCurrency = (e) => {
    this.props.changeCurrency(e.target.dataset.value);
    this.props.handleShowCurrencies();
  };

  render() {
    const { handleShowCurrencies } = this.props;
    const { currencies } = this.props.data;
    return (
      <Modal>
        <OutsideClickHandler onOutsideClick={handleShowCurrencies}>
          <ul className="show-currencies">
            {currencies.map((currency) => (
              <li
                key={currency}
                onClick={(e) => this.updateCurrency(e)}
                data-value={currency}
                className={currency}
              >
                {currency}
              </li>
            ))}
          </ul>
        </OutsideClickHandler>
      </Modal>
    );
  }
}

const CurrencySelectorWithQuery = withQuery(CurrencySelector, GET_CURRENCIES);

const mapDispatchToProps = (dispatch) => ({
  changeCurrency: (currency) => dispatch(changeCurrency(currency)),
});


export default connect(
  null,
  mapDispatchToProps
)(CurrencySelectorWithQuery);
