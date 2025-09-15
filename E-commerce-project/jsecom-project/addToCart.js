import { getCardProductFromLS } from "./getCardProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCardProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorPro = getCardProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  // console.log(quantity, price);

  price = price.replace("$", "");

  let existingProd = arrLocalStorPro.find((curProd) => curProd.id === id);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStorPro.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    
    showToast("add", id);
  }

  if (existingProd)
    // alert("This product is already selected")
    return false;

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorPro.push({ id, quantity, price });
  localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorPro));

  

  // update cart buttton value
  updateCartValue(arrLocalStorPro);

  showToast("add", id);
};
