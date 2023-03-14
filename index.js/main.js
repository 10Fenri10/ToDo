const form = document.querySelector("#form");
const toDoInput = document.querySelector("#toDoInput");
const button = document.querySelector("#inputbutton");
const ToDolist = document.querySelector("#ToDolist");
const TodoText = document.querySelector("todo-title");
const Bbody = document.querySelector("body");
const getUsersUrl = "http://localhost:1337/api/users";
const ArrPrio = ["minor", "regular", "critical"];

ToDolist.addEventListener("click", remakeTodo);
form.addEventListener("submit", addToDo);
ToDolist.addEventListener("click", deleteToDo);
ToDolist.addEventListener("click", doneToDo);
ToDolist.addEventListener("click", undoneToDo);
ToDolist.addEventListener("click", getUserTodo);
document.body.addEventListener("click", backToTodo);
const createurl = "http://localhost:1337/api/todos";
const deleteurl = "http://localhost:1337/api/todos/8";
const updateurl = "http://localhost:1337/api/todos/9";
import {
  loginUser,
  forDeleteToDo,
  createToDo,
  getToDoList,
  updateToDo,
} from "../modules/funForFetch.js";
import { doneToDo } from "../modules/doneTodo.js";
import { deleteToDo } from "../modules/deleteTodo.js";
import { addToDo } from "../modules/addTodo.js";
import { kek } from "../modules/jwtToken.js";
import { undoneToDo } from "../modules/undoneTodo.js";
import { remakeTodo } from "../modules/remake.js";
import { prioritySelect } from "../modules/funForPriority.js";
import { getUserTodo } from "../modules/getUserTodo.js";
import { usersSelect } from "../modules/usersSelect.js";
import { backToTodo } from "../modules/backToTodo.js";

getToDoList("GET", getUsersUrl, null, kek).then((response) => {
  const users = [];
  const len = response.length;

  for (let i = 0; i < len; i++) {
    users.push(response[i].username);
  }

  usersSelect(users);
});

prioritySelect(ArrPrio);

getToDoList("GET", createurl, null, kek).then((response) => {
  for (let z = 0; z < response.data.length; z++) {
    const anonToDo = response.data[z];
    console.log(anonToDo);
    const deu = anonToDo.attributes.createdAt;
    let arr = deu.split("");
    arr.splice(16, 8);
    const deu2 = arr.join("");
    let arr2 = deu2.split("T");
    const deu3 = arr2.join(" ");
    const ToDoDate = {
      WhoTodo: anonToDo.attributes.who,
      DoneTodo: anonToDo.attributes.done,
      TitleToDo: anonToDo.attributes.title,
      IdTodo: anonToDo.id,
      DeuTodo: deu3,
      PriorityTodo: anonToDo.attributes.priority,
    };
    console.log(anonToDo);

    const cssClass = ToDoDate.DoneTodo ? "todo-title del" : "todo-title ";

    const todohtml = `<div id="ToDolist2">
          <div id="${ToDoDate.IdTodo}" class="ToDo">
          <span class="${cssClass}">${ToDoDate.TitleToDo}</span>
          
          <div class="ButtonList">
          <div type="button" data-action="userName" class="who">Кому: ${ToDoDate.WhoTodo}</div>
          <span  class="date">${ToDoDate.DeuTodo}</span>
          <div type="button" data-action="done" class='btn-action done'>


          </div>
          <div type="button" data-action="update" class='btn-action undone'>
             
          </div>
          <div type="button" data-action="remake" class='btn-action remake'>

          </div>
          
          <div type="button" data-action="delete" class='btn-action delete'>
              
          </div>
          </div>
          </div>
      </div>`;
    let V = ToDoDate.PriorityTodo;
    if (V === "minor") {
      minor.insertAdjacentHTML("beforeend", todohtml);
    } else if (V === "regular") {
      regular.insertAdjacentHTML("beforeend", todohtml);
    } else {
      critical.insertAdjacentHTML("beforeend", todohtml);
    }
  }
  // return ToDoDate;
});

let inputR = document.createElement("input");
let buttonR = document.createElement("button");
buttonR.classList.add("RemakeBtn");

button.disabled = true;
function buttonDisaled() {
  toDoInput.addEventListener("input", function () {
    button.disabled = !this.value.length;
  });
}
buttonDisaled();
