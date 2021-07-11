const username_form = document.body.querySelector(".username__form");
const username_input = document.body.querySelector(".username__input");
const username_label = document.body.querySelector(".username__label");
const todolist__input = document.querySelector(".todolist__input");

const USERNAMECHK = "username";

function getusername(e) {
  e.preventDefault();
  const username = username_input.value;
  localStorage.setItem(USERNAMECHK, username);
  setName(username);
}

function setName(username) {
  if (username !== null) {
    username_label.innerText = `Hello ${username}`;
    username_input.classList.toggle("hidden");
    todolist__input.classList.toggle("hidden");
  }
}

const savename = localStorage.getItem(USERNAMECHK);

if (savename !== null) {
  setName(savename);
} else {
  localStorage.clear();
}
username_form.addEventListener("submit", getusername);
