const loginform = document.body.querySelector(".username__form");
const loginform_username = document.body.querySelector(".username__input");
const hello = document.body.querySelector(".username__label");

function getusername(e) {
  e.preventDefault();
  const username = loginform_username.value;    
  localStorage.setItem("username",username);
  setName(username);
}

function setName(username){
  if (username !== null){    
    hello.innerText = `Hello ${username}`;    
    loginform.classList.toggle("hidden");
    hello.classList.toggle("hidden"); 
  }
}

const savename = localStorage.getItem("username");

setName(savename);

loginform.addEventListener("submit",getusername)