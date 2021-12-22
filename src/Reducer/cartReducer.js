export default function cart(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return action.payload;
    case "REMOVE_ITEM":
      return action.payload;
    case "UPDATE_QTY":
      return action.payload;
    default:
      return state;
  }
}
