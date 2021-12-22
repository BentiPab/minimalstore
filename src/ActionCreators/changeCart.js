export function addItem(cart, item) {
  const newCart = [...cart];
  let i = null;
  cart.forEach((element, index) => {
    if (element.id === item.id) {
      i = index + 1;
    }
  });
  if (i) {
    newCart[i - 1].product.qty += 1;
  } else newCart.push(item);

  newCart.quantity = setCartQuantity(newCart);
  return { type: "ADD_ITEM", payload: newCart };
}

export function removeItem(cart, id) {
  const newCart = cart.filter((element) => element.id !== id);
  newCart.quantity = setCartQuantity(newCart);

  return { type: "REMOVE_ITEM", payload: newCart };
}

export function updateQty(action, id, cart) {
  const newCart = [...cart];
  let i = null;
  cart.forEach((element, index) => {
    if (element.id === id) {
      i = index;
    }
  });
  if (action === "PLUS") {
    newCart[i].product.qty += 1;
  } else if (action === "MINUS") {
    newCart[i].product.qty -= 1;
  }
  newCart.quantity = setCartQuantity(newCart);

  return { type: "UPDATE_QTY", payload: newCart };
}

const setCartQuantity = (cart) => {
  let quantity = 0;
  cart.forEach(({ product }) => (quantity += product.qty));

  return quantity;
};
