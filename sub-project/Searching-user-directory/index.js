let usercontainer = document.querySelector(".user-container");
let searchinput = document.querySelector("#searchinput");

const users = [
  {
    profileUrl:
      "https://th.bing.com/th/id/OIP.oHZyyQp3HtSME_R7i-A19wHaEo?w=298&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    name: "Olivia",
    email: "sakura123@example.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQEFWWgCbegAcFso1VomUmMMlWGLlk02zKg&s",
    name: "Goku",
    email: "obito123@example.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot_Njx8Fj66ibj9WQzHzJRTGu4SXTmjdtmg&s",
    name: "Vegeta",
    email: "trunks123@example.com",
  },
];



function renderusers(arr){
  usercontainer.innerHTML = ""; // Clear previous content
  arr.map(function (obj) {
  let {profileUrl, name, email} = obj;

  let divelement = document.createElement("div");
  divelement.className = "user-item";
  divelement.innerHTML=`<img src=${profileUrl} alt="error loading image" />
            <div
            ><h3>${name}</h3>
            <p>${email}</p></div>
        </div>
         `

  usercontainer.append(divelement);
})
}
renderusers(users);

function handlesearch(e) {
  let searchvalue = e.target.value;
  let filterdusers = users.filter(obj=>{
    return (
      obj.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchvalue.toLowerCase())
    );
  })

  renderusers(filterdusers);

}

searchinput.addEventListener("input",handlesearch)
























