import { getCardProductFromLS } from "./getCardProducts";

export const fetchQuantityFromCartLS=(id,price)=>{
    let cartProducts = getCardProductFromLS();
    let existingProducts = cartProducts.find((curProd)=>curProd.id===id);

    let quantity =1;
    if (existingProducts){
        quantity= existingProducts.quantity;
        price=existingProducts.price;


    }

    return{quantity,price};
};