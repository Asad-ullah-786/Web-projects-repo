import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";


const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');


export const showProductContainer = (products) => {
    if(!products){
        return false;
   }

    

    products.forEach((curProd) => {
        const {brand , category, description, id, image, name, price, stock} = curProd;
        

        const productClone = document.importNode(productTemplate.content, true);
    

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        // Set the product details in the cloned template

        productClone.querySelector(".productCategory").textContent = category;
         productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productBrand").textContent = brand;    
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `$ ${price}`;
        productClone.querySelector(".productActualPrice").textContent = `$ ${curProd.actualprice *2}`;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productStock").style.color = stock > 0 ? 'green' : 'red';
        productClone.querySelector(".productStock").textContent = stock > 0 ? `In Stock (${stock})` : 'Out of Stock';
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
       

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock);
        } );

        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        addToCart(event, id, stock);
});


        productContainer.append(productClone);
    });
};





