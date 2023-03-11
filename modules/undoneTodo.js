import { getToDoList, updateToDo } from "./funForFetch.js";
import { kek } from "./jwtToken.js";
const createurl = "http://localhost:1337/api/todos";

const objForUndoneTodo = {
  undoneToDo: function (event) {
    if (event.target.dataset.action !== "update") return;

    const parentNode = event.target.closest(".ToDo");
    console.log(parentNode.done);
    const id = parentNode.id;

    getToDoList("GET", createurl, null, kek)
      .then((data) => {
        let todos = data.data;
        console.log(todos);
        const ToDo = todos.find(function (ToDo) {
          if (ToDo.id === id) {
            return true;
          }
        });
      })
      .then((a) => {
        const bodyForUndone = {
          data: {
            done: false,
          },
        };
        const urlForDone = `http://localhost:1337/api/todos/${id}`;
        updateToDo("PUT", urlForDone, bodyForUndone, kek);
      });
    console.log("good");

    const ToDoTiyle = parentNode.querySelector(".todo-title");
    console.log(ToDoTiyle);
    ToDoTiyle.classList.remove("del");
  },
};

export const undoneToDo = objForUndoneTodo.undoneToDo;
