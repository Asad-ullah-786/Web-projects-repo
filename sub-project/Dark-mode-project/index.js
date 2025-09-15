const inputE1=document.querySelector(".input");
const bodyE1=document.querySelector("body");
console.log(inputE1.checked);
inputE1.checked= JSON.parse(localStorage.getItem("mode"))  ;
updateBody();   
function updateBody(){
    if(inputE1.checked){
        bodyE1.style.background="black";
    }else{
        bodyE1.style.background="white";
    }
}
inputE1.addEventListener("input",()=>{
    updateBody();
    updatelocalStorage();
});

function updatelocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputE1.checked));  
}