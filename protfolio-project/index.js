const containerEl = document.querySelector('.text-container');

const careers = ['Asad ULLah.', 'Full Stack Developer.'];

let careerindex = 0;
let characterIndex = 0;
changeCareer()

function changeCareer() {
    characterIndex++;

containerEl.innerHTML = `<text-container>I'm  ${careers[careerindex].slice(0,1)==="F" ? "a": ""} ${careers[careerindex].slice(0,characterIndex)}</text-container`; 

if(characterIndex===careers[careerindex].length){
    careerindex++
    characterIndex =0
} 
if(careerindex===careers.length){
    careerindex =0;
}
setTimeout(changeCareer,250)

}
