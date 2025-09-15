let randombtn = document.querySelector(".randombtn")
let colorinput = document.querySelector("#colorinput")
let applybtn = document.querySelector(".applybtn")
let currentcolorvalue = document.querySelector(".currentcolorvalue")
let container =document.querySelector(".container")

const colorarry =['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime', 'teal', 'navy', 'maroon', 'olive', 'silver'];

const generaterandomcolor = ()=>{
    const randomindex = Math.floor(Math.random()*colorarry.length)
    
    return (colorarry[randomindex]) 
    
}

let color =generaterandomcolor();


const changecolor = (color)=>{
    container.style.backgroundColor = color;
    currentcolorvalue.innerText=color
}

const handlerandombtnclick = ()=>{
    let color =generaterandomcolor();
    changecolor(color);
}
const handleapplybtnclick = ()=>{
    const color=colorinput.value;
    changecolor(color);
}
randombtn.addEventListener("click",handlerandombtnclick)

applybtn.addEventListener("click",handleapplybtnclick)
















