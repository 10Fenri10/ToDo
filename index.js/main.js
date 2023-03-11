const form = document.querySelector("#form");
const toDoInput = document.querySelector("#toDoInput");
const button = document.querySelector("#inputbutton");
const ToDolist = document.querySelector("#ToDolist");
const TodoText = document.querySelector("todo-title");
const Bbody = document.querySelector("body");

ToDolist.addEventListener("click", remakeTodo);
ToDolist.addEventListener("click", getUrl);
form.addEventListener("submit", addToDo);
ToDolist.addEventListener("click", deleteToDo);
ToDolist.addEventListener("click", doneToDo);
ToDolist.addEventListener("click", undoneToDo);

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
import { priorityY } from "../modules/funForPriority.js";

priorityY();

getToDoList("GET", createurl, null, kek).then((data) => {
  let todos = data.data;
  // console.log(todos);
  const countToDo = data.data.length;
  for (let z = 0; z < countToDo; z++) {
    getToDoList("GET", createurl, null, kek).then((a) => {
      console.log(a.data.length);
      const anonToDo = a.data[z];
      const deu = anonToDo.attributes.createdAt;
      let arr = deu.split("");
      arr.splice(16, 8);
      const deu2 = arr.join("");
      let arr2 = deu2.split("T");
      const deu3 = arr2.join(" ");
      const ToDoDate = {
        DoneTodo: anonToDo.attributes.done,
        TitleToDo: anonToDo.attributes.title,
        IdTodo: anonToDo.id,
        DeuTodo: deu3,
        PriorityTodo: anonToDo.attributes.priority,
      };
      console.log(anonToDo);

      const cssClass = ToDoDate.DoneTodo ? "todo-title del" : "todo-title ";

      const todohtml = `<div id="ToDolist">
          <div id="${ToDoDate.IdTodo}" class="ToDo">
          <span class="${cssClass}">${ToDoDate.TitleToDo}</span>
          
          <div class="ButtonList">
          <span class="date">${ToDoDate.DeuTodo}</span>
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
      // ToDolist.insertAdjacentHTML("beforeend", todohtml);

      return ToDoDate;
    });
  }
});

let inputR = document.createElement("input");
let buttonR = document.createElement("button");
buttonR.classList.add("RemakeBtn");

function getUrl(event) {
  if (event.target.dataset.action !== "remake") return;

  const parentNode = event.target.closest(".ToDo");

  const id = parentNode.id;

  const newurl = `http://localhost:1337/api/todos/${id}`;

  // console.log(newurl);

  return newurl;
}

function renderToDo(newTodoBody) {
  const cssClass = newTodoBody.done ? "todo-title del" : "todo-title ";

  const todohtml = `<div id="ToDolist">
          <li id="${newTodoBody.id}" class="ToDo">
          <span class="${cssClass}">${newTodoBody.title}</span>
          <button type="button" data-action="done" class='btn-action'>
              <img src="image/icons8-галочка-48.png" alt="" style="vertical-align:middle">

          </button>
          <button type="button" data-action="remake" class='btn-action'>
              <img src="image/icons8-шариковая-ручка-48.png" alt="" style="vertical-align:middle">
          </button>
          <button type="button" data-action="update" class='btn-action'>
              <img src="image/icons8-удалить-48.png" alt="" style="vertical-align:middle">
          </button>
          <button type="button" data-action="delete" class='btn-action'>
              <img src="image/icons8-удалить-50.png" alt="" style="vertical-align:middle">
          </button>
          </li>
      </div>`;

  ToDolist.insertAdjacentHTML("beforeend", todohtml);
}
button.disabled = true;
function buttonDisaled() {
  toDoInput.addEventListener("input", function () {
    button.disabled = !this.value.length;
  });
}
buttonDisaled();
