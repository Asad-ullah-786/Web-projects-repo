const imagecontainerel= document.querySelector(".image-container")
const prevel=document.getElementById("prev")
const nextel=document.getElementById("next")
let x=0;
let timer;

prevel.addEventListener("click" ,()=>{
    x=x+45;
    clearTimeout(timer);
    updategallery();
});
nextel.addEventListener("click" ,()=>{
    x=x-45;
    clearTimeout(timer);
    updategallery();
});

function updategallery(){
    imagecontainerel.style.transform
    =`perspective(1000px) rotateY(${x}deg)`
    timer=setTimeout(()=>{
        x=x-45;
        updategallery();
    },3000);
}
updategallery();