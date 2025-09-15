    export const homeQuantityToggle = (event, id, stock) => {


    const currentCardElement = document.querySelector(`#card${id}`);
  
    
    const productQuantity =currentCardElement.querySelector('.productQuantity');
   

    let quantity= parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    if(event.target.className==="cartIncrement"){
        if(quantity < stock){
            quantity++;
        }
        else if(quantity===stock){
            quantity = stock;
            
        }
    }

    else if(event.target.className==="cartDecrement"){
        if(quantity > 1){
            quantity--;
        }
        else if(quantity===1){
            quantity = 1;
           
        }
    }

    productQuantity.textContent = quantity;
    productQuantity.setAttribute('data-quantity', quantity);
    return quantity;


}; 




