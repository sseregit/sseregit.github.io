const todolist = document.querySelector(".todolist");
const todolist_list = document.querySelector(".todolist_list");

let toDos = [];
const TODOLIST = "todolist";

function savedlist(todoObj) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  li.id = todoObj.id;
  span.innerText = todoObj.text;
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);
  todolist_list.appendChild(li);
  btn.addEventListener("click", deleteTodo);
  toDos.push(todoObj);
}

function addToDo(e) {
  e.preventDefault();
  const todo = todolist__input.value;
  const todoObj = {
    text: todo,
    id: Date.now(),
  };
  savedlist(todoObj);
  todolist__input.value = "";
  localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

savelist = localStorage.getItem(TODOLIST);

if (savelist !== null) {
  const parsedlist = JSON.parse(savelist);
  toDos = parsedlist;
  toDos.forEach(savedlist);
}

todolist.addEventListener("submit", addToDo);
