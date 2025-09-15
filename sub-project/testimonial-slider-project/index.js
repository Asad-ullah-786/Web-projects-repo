const testimonials = [
{
    name: "Charsie G",
    photoUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I love my Apple products! The very best.They're sleek, easy to use, and just work. I wouldn't use anything else.",

},
{
    name: "John D",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple stands out with its exceptional quality and attention to detail. I've used many products before, but this one truly delivers. I'm genuinely impressed.",
},

{
    name: "Pappi jolo",
    photoUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHwyfDB8fHww",
    text: "Honestly, I wasn't expecting much — but Apple blew me away! Great feel, works flawlessly, and looks premium. Will definitely be buying again.",
},

{
    name: "Chai G",
    photoUrl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple is a total game changer 🍎🔥 The quality? 10/10. The experience? Smooth and satisfying. Absolutely obsessed!",
},


];

const imgEL = document.querySelector("img");
const textEL = document.querySelector(".text");
const usernameEL = document.querySelector(".username"); 

let idx=0;

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx]
    imgEL.src = photoUrl;
    textEL.innerText = text;
    usernameEL.innerText = name;
    idx++
    if(idx===testimonials.length){
        idx=0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 5000);

}