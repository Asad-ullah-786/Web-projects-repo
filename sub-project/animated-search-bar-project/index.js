const searchbarcontainerel= document.querySelector(".search-bar-container")

const magnifierel = document.querySelector(".magnifier")

magnifierel.addEventListener("click" ,()=>{
    searchbarcontainerel.classList.toggle("active")
});