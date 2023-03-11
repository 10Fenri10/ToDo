const fetchFunction = {
  loginUser: function (method, url, body = null) {
    const headers = {
      "content-type": "application/json",
    };
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    }).then((Response) => {
      return Response.json();
    });
  },
  forDeleteToDo: function (method, url, token) {
    return fetch(url, {
      method: method,
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  createToDo: function (method, url, body, token) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((Response) => {
      return Response.json();
    });
  },
  getToDoList: function (method, url, body = null, token) {
    const createurl = "http://localhost:1337/api/todos";
    return fetch(url, {
      method: method,
      headers: {
        Authorization: "Bearer " + token,
      },
      body: body,
    }).then((Response) => {
      return Response.json();
    });
  },
  updateToDo: function (method, url, body, token) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((Response) => {
      return Response.json();
    });
  },
};

export const loginUser = fetchFunction.loginUser;
export const forDeleteToDo = fetchFunction.forDeleteToDo;
export const createToDo = fetchFunction.createToDo;
export const getToDoList = fetchFunction.getToDoList;
export const updateToDo = fetchFunction.updateToDo;
