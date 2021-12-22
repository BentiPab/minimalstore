export default function currencyReducer(state = "USD", action) {
  switch (action.type) {
    case "CHANGE_CURRENCY":
      return action.payload;
    default:
      return state;
  }
}
