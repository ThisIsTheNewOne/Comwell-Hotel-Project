import { signUp, login } from "./auth-proxy";

export async function createSignup(data) {
  console.log("sign up data", data);
  try {
    const response = await signUp(data.email, data.password);

    console.log(response);

    //We are redirectiong to index page
  } catch (error) {
    console.log("error happened: ", error);
  }
}
/* 
export function createSignup(data) {
  return fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
} */

export async function loginUser(data) {
  console.log("login data", data);

  try {
    const response = await login(data.email, data.password);
    console.log(response);

    localStorage.setItem("token", response.token);
    console.log(localStorage.getItem("token"));
  } catch (error) {
    console.log("error happened: ", error);
  }
}

/* export async function loginUser(data) {
  console.log(data, "data in firebase");
  return fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
} */
