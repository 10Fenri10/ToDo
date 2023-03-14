import { kek } from "./jwtToken.js";
import { createToDo, getToDoList } from "./funForFetch.js";

const createurl = "http://localhost:1337/api/todos";
const ToDolist = document.querySelector("#ToDolist");
const minor = document.querySelector("#minor");
const regular = document.querySelector("#regular");
const critical = document.querySelector("#critical");
const button = document.querySelector("#inputbutton");

const objForAddTodo = {
  addToDo: function (event) {
    event.preventDefault();
    const todoText = toDoInput.value;
    const date = new Date();
    const priority = document.querySelector("#priorityId");
    console.log(priority.value);
    const valueForPrio = priority.value;

    const user = document.querySelector("#usersId");
    console.log(user.value);
    const valueForWho = user.value;
    const newTodoBody = {
      data: {
        priority: valueForPrio,
        deu: date,
        title: todoText,
        done: false,
        who: valueForWho,
        user: {
          id: 1,
          username: "Test user",
          email: "test1@test.com",
          provider: "local",
          confirmed: true,
          blocked: false,
          createdAt: "2023-01-19T13:35:48.589Z",
          updatedAt: "2023-01-19T13:35:48.589Z",
          fullname: null,
        },
      },
    };
    console.log(newTodoBody);
    createToDo("POST", createurl, newTodoBody, kek).then((a) => {
      getToDoList("GET", createurl, null, kek).then((data) => {
        let todos = data.data;
        const lastTodo = todos.at(-1);
        console.log(lastTodo);

        const deu = lastTodo.attributes.createdAt;
        let arr = deu.split("");
        arr.splice(16, 8);
        const deu2 = arr.join("");
        let arr2 = deu2.split("T");
        const deu3 = arr2.join(" ");
        const DataTodo = {
          WhoTodo: lastTodo.attributes.who,
          DoneTodo: lastTodo.attributes.done,
          TitleToDo: lastTodo.attributes.title,
          IdTodo: lastTodo.id,
          DeuTodo: deu3,
          PriorityTodo: lastTodo.attributes.priority,
        };
        const cssClass = DataTodo.DoneTodo ? "todo-title del" : "todo-title ";

        const todohtml = `<div id="ToDolist">
          <li id="${DataTodo.IdTodo}" class="ToDo">
          <span class="${cssClass}">${DataTodo.TitleToDo}</span>
          
          <div class="ButtonList">
            <div type="button" data-action="userName" class="who">Кому: ${DataTodo.WhoTodo}</div>
            <span class="date">${DataTodo.DeuTodo}</span>
            <div type="button" data-action="done" class='btn-action done'>


            </div>
            <div type="button" data-action="update" class='btn-action undone'>
              
            </div>
            <div type="button" data-action="remake" class='btn-action remake'>

            </div>
            
            <div type="button" data-action="delete" class='btn-action delete'>
                
            </div>
          </div>
          </li>
      </div>`;
        let V = DataTodo.PriorityTodo;
        if (V === "minor") {
          minor.insertAdjacentHTML("beforeend", todohtml);
        } else if (V === "regular") {
          regular.insertAdjacentHTML("beforeend", todohtml);
        } else {
          critical.insertAdjacentHTML("beforeend", todohtml);
        }
        return DataTodo;
      });
    });
    toDoInput.value = "";
    toDoInput.focus();

    button.disabled = true;
  },
};

export const addToDo = objForAddTodo.addToDo;
