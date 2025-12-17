const containerEl = document.querySelector('.text-container');
const careers = [
  'Asad Ullah',
  'Full Stack Web Developer',
  'Frontend Developer ',
  'Backend Developer ',
  'Graphic Designer',
  'Logo Designer',
  'UI/UX Designer',
  'WordPress Expert',
  'Freelancer',
  'Digital Creator'
  
];

let careerIndex = 0;
let characterIndex = 0;

changeCareer();

function changeCareer() {
  // Clear previous text and add typing
  const currentCareer = careers[careerIndex];
  
  // Agar current text name hai ("Asad Ullah"), to "a" na lagao
  const prefix = currentCareer.startsWith('Asad') ? "I'm " : "I'm a ";

  containerEl.innerHTML = `<span>${prefix}${currentCareer.slice(0, characterIndex)}</span>`;

  characterIndex++;

  // Jab pura word type ho jaye
  if (characterIndex > currentCareer.length) {
    careerIndex++;
    characterIndex = 0;

    if (careerIndex >= careers.length) {
      careerIndex = 0; // Loop reset
    }

    setTimeout(changeCareer, 1000); // pause before next word
  } else {
    setTimeout(changeCareer, 150); // typing speed
  }
}


document.addEventListener("DOMContentLoaded", function () {
  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.3,
    videoSrc: "https://www.youtube.com/watch?v=s9xk77X4m5c",
    videoStartTime: 304 // Start from 304 seconds
  });
});
