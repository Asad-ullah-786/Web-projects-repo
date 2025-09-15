import { getCardProductFromLS } from "./getCardProducts";

export const updateCartTotal = () => {
    let productSubTota = document.querySelector('.productSubTotal');
    let productFinalTotal = document.querySelector('.productFinalTotal');
    let localCartProducts = getCardProductFromLS();
    let initialValue =0;    
    let totalProductPrice = localCartProducts.reduce((accum,curElem)=>{
        let productPrice = parseInt(curElem.price)||0;
        return accum + productPrice;
    },initialValue);
    
   productSubTota.textContent =  `$ ${totalProductPrice}`; ;
    productFinalTotal.textContent= `$ ${totalProductPrice +10}`; // assuming shipping cost is $10
};


