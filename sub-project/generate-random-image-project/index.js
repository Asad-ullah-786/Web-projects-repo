const imageContainerEl = document
.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", ()=>{
    imageNum=10;
    addnewimages()
});

function addnewimages() {
    for (let index = 0; index <imageNum; index++) {
        
         const newimageEl=document.createElement("img")
    newimageEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random() * 200)}`;

    imageContainerEl.appendChild(newimageEl); 
    }
  
}