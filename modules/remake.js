let InputRemake = document.createElement("input");
let ButtonRemake = document.createElement("button");
ButtonRemake.classList.add("RemakeBtn");
const RemakeInput = document.querySelector(".RemakeInput");
const Body = document.querySelector("body");
import { updateToDo } from "./funForFetch.js";
import { kek } from "./jwtToken.js";

const objForRemake = {
  remakeTodo: function (event) {
    if (event.target.dataset.action !== "remake") return;
    if (InputRemake.classList.contains("RInput")) {
      return;
    }
    const RemakeTool = document.createElement("div");
    RemakeTool.setAttribute("id", "RTool");
    RemakeInput.append(RemakeTool);
    RemakeTool.append(InputRemake);
    RemakeTool.append(ButtonRemake);
    InputRemake.classList.add("RInput");
    ButtonRemake.classList.add("RButton");

    const parentNode = event.target.closest(".ToDo");
    const TextInTodo = parentNode.querySelector(".todo-title");
    console.log(parentNode.class);

    const id = parentNode.id;
    // console.log(id);
    const newurl = `http://localhost:1337/api/todos/${id}`;

    ButtonRemake.setAttribute("type", "submit");
    ButtonRemake.setAttribute("data-action", "RemakeAction");
    InputRemake.setAttribute("id", "UpdateInput");
    ButtonRemake.innerHTML += "Отправить";

    Body.addEventListener("click", chancgeToDo);

    function chancgeToDo(event) {
      if (event.target.dataset.action !== "RemakeAction") return;
      const UpdateInput = document.querySelector("#UpdateInput");

      const newTitle = {
        data: {
          title: UpdateInput.value,
        },
      };
      TextInTodo.innerHTML = UpdateInput.value;
      updateToDo("PUT", newurl, newTitle, kek).then((data) => {
        RemakeTool.remove();
        InputRemake.classList.remove("RInput");
        ButtonRemake.classList.remove("RButton");
        InputRemake.value = "";
        ButtonRemake.innerHTML = "";
      });
    }
    ButtonRemake.disabled = true;
    function buttonDisaled2() {
      InputRemake.addEventListener("input", function () {
        ButtonRemake.disabled = !this.value.length;
      });
    }
    buttonDisaled2();
  },
};

export const remakeTodo = objForRemake.remakeTodo;
