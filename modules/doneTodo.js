import { getToDoList } from "./funForFetch.js";
import { kek } from "./jwtToken.js";
import { updateToDo } from "./funForFetch.js";

const createurl = "http://localhost:1337/api/todos";

const objForDoneTodo = {
  doneToDo: function (event) {
    if (event.target.dataset.action !== "done") return;

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
        // ToDo.done = !ToDo.done;
        const bodyForDone = {
          data: {
            done: true,
          },
        };
        const urlForDone = `http://localhost:1337/api/todos/${id}`;
        updateToDo("PUT", urlForDone, bodyForDone, kek);
      });

    const ToDoTiyle = parentNode.querySelector(".todo-title");
    ToDoTiyle.classList.add("del");
  },
};
export const doneToDo = objForDoneTodo.doneToDo;
