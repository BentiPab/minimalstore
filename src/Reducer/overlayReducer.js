export default function overlayReducer(state = false, action) {
  switch (action.type) {
    case "SHOW_OVERLAY":
      return action.payload;
    default:
      return state;
  }
}
