const dayel = document.getElementById("day")

const hourel= document.getElementById("hour")
const minuteel=document.getElementById("minute")
const secondel = document.getElementById("second")

const newyeartime = new Date("Jan 1, 2026 00:00:00")
.getTime()

updatecountdown()

function updatecountdown(){
    const now = new Date().getTime();
    const gap =newyeartime - now;

    const second = 1000;
    const minute= second *60;
    const hour = minute *60;
    const day = hour *24;

    const d= Math.floor(gap / day);
    const h= Math.floor((gap % day) / hour);
    const m= Math.floor((gap % hour) / minute);
    const s= Math.floor((gap % minute) / second);


        dayel.innerText=d;
        hourel.innerText=h;
        minuteel.innerText=m;
        secondel.innerText=s;

        setTimeout(updatecountdown,1000)

}