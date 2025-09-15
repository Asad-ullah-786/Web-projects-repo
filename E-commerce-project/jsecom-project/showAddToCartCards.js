import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCardProductFromLS } from "./getCardProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartTotal } from "./updateCartTotal";

let cartProducts = getCardProductFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});


const cartElement = document.querySelector("#productContainer");
const templateContainer = document.querySelector("#productTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;
    let productClone = document.importNode(templateContainer.content, true);

    const LSactualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".productCategory").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productQuantity").textContent =
      LSactualData.quantity;
    productClone.querySelector(
      ".productPrice"
    ).textContent = `$ ${LSactualData.price}`;

    productClone.querySelector(".stockElement").addEventListener("click", (event) => {
        incrementDecrement(event, id, stock,price);
    } );



    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    cartElement.appendChild(productClone);
  });
};

showCartProduct();
updateCartTotal();
