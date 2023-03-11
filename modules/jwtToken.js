import { loginUser } from "./funForFetch.js";

const loginreqwest = "http://localhost:1337/api/auth/local";
const body = {
  identifier: "test1@test.com",
  password: "Test12345",
};

loginUser("POST", loginreqwest, body).then((data) => {
  localStorage.setItem("jwt", data.jwt);
});

const objForJwtToken = {
  kek: localStorage.getItem("jwt"),
};

export const kek = localStorage.getItem("jwt");
