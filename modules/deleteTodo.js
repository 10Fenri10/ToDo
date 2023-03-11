import { forDeleteToDo } from "./funForFetch.js";
import { kek } from "./jwtToken.js";
const objForDelete = {
  deleteToDo: function (event) {
    if (event.target.dataset.action !== "delete") return;

    const parentNode = event.target.closest(".ToDo");

    const id = parentNode.id;
    const urlForDelete = `http://localhost:1337/api/todos/${id}`;

    forDeleteToDo("DELETE", urlForDelete, kek);

    parentNode.remove();
  },
};
export const deleteToDo = objForDelete.deleteToDo;
