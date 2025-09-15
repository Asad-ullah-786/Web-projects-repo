const navbarel = document.querySelector(".navbar");
const bottomcontainerel = document.querySelector(".bottom-container");


window.addEventListener("scroll",()=>{
    if(
        window.scrollY>bottomcontainerel.offsettop-navbarel.offsetheight-50
    ){
        navbarel.classList.add("active");

    }else{
        navbarel.classList.remove("active");

    }


});