const objForPriority = {
  priorityY: function () {
    const values = ["minor", "regular", "critical"];
    let select = document.createElement("select");
    select.name = "priorityNames";
    select.id = "priorityId";
    select.setAttribute("class", "select-css");
    // let ddd;
    // let b = new Promise(function (resolve) {
    //   setTimeout(() => {
    //     resolve((ddd = document.querySelector("#priorityId")));
    //   }, 0);
    // });

    for (const val of values) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
    }

    var label = document.createElement("label");

    label.htmlFor = "priorityNames";
    document.getElementById("container").appendChild(label).appendChild(select);
  },
};

export const priorityY = objForPriority.priorityY;
