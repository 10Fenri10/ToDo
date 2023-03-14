const objForUsersSelect = {
  usersSelect: function (arr) {
    const values = arr;
    let select = document.createElement("select");
    select.name = "priorityNames";
    select.id = "usersId";
    select.setAttribute("class", "select-css");

    for (const val of values) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
    }

    var label = document.createElement("label");

    label.htmlFor = "usersNames";
    document.getElementById("container2").appendChild(label).appendChild(select);
  },
};
export const usersSelect = objForUsersSelect.usersSelect;
