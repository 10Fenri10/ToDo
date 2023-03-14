const objForBackToTodo = {
  backToTodo: function (event) {
    if (event.target.dataset.action !== "back") return;
    document.getElementById("demo").innerHTML = `
      .ToDo1{
    display: none;
    }`;
    let allTodo1ForDel = document.querySelectorAll(".ToDo1");
    let countToDo = allTodo1ForDel.length;
    for (let i = 0; i < countToDo; i++) {
      let allTodo1 = document.querySelector(".ToDo1");
      allTodo1.remove();
    }
    let backButton = document.querySelector(".back");
    backButton.remove();
    console.log(backButton);
  },
};

export const backToTodo = objForBackToTodo.backToTodo;
