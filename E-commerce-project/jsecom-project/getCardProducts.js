import { updateCartValue } from "./updateCartValue";

export const getCardProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductsLS");

  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  // update cart buttton value
  updateCartValue(cartProducts);
  return cartProducts;
};
