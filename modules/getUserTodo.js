const getUsersUrl = "http://localhost:1337/api/users";
import { getToDoList } from "./funForFetch.js";
import { kek } from "./jwtToken.js";

const objForGetUserTodo = {
  userToDo: function (event) {
    if (event.target.dataset.action !== "userName") return;
    if (document.querySelector("#demo") !== null) {
      let styleNone = document.querySelector("#demo");
      styleNone.remove();
    }
    const parentNode = event.target.closest(".ToDo");
    const TextInTodo = parentNode.querySelector(".who");
    let str = TextInTodo.innerHTML;
    let arr = str.split("");
    arr.splice(0, 6);
    const str2 = arr.join("");
    console.log(str2);
    let backButton = `<div type="button" data-action="back" class="back">< Назад</div>`;
    let styleNone = `<style id="demo">
    .ToDo{
    display: none;
}
    </style>`;
    document.body.insertAdjacentHTML("beforeend", styleNone);
    document.body.insertAdjacentHTML("beforeend", backButton);
    let UrlUser = `http://localhost:1337/api/todos?filters[who][$eq]=${str2}`;

    getToDoList("GET", UrlUser, null, kek).then((response) => {
      for (let z = 0; z < response.data.length; z++) {
        console.log(response.data.length);
        const anonToDo = response.data[z];
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
          <div id="${ToDoDate.IdTodo}" class="ToDo1">
          <span class="${cssClass}">${ToDoDate.TitleToDo}</span>
          
          <div class="ButtonList">

          <span  class="date">${ToDoDate.DeuTodo}</span>
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
    });
  },
};
export const getUserTodo = objForGetUserTodo.userToDo;
