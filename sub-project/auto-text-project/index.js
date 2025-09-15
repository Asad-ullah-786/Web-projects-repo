const containerEl = document.querySelector('.container');

const careers = ['Front End Developer.', 'Back End Developer.','Freelancer.', 'Ethical Hacker.', 'Full Stack Developer.'];

let careerindex = 0;
let characterIndex = 0;
changeCareer()

function changeCareer() {
    characterIndex++;

containerEl.innerHTML = `<h1>I am ${careers[careerindex].slice(0,1)==="E" ? "an": "a"} ${careers[careerindex].slice(0,characterIndex)}</h1>`; 

if(characterIndex===careers[careerindex].length){
    careerindex++
    characterIndex =0
} 
if(careerindex===careers.length){
    careerindex =0;
}
setTimeout(changeCareer,250)

}
