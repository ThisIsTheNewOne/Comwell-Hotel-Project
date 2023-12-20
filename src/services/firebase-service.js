import { signUp, login } from "./auth-proxy";

export async function createSignup(data) {
  try {
    const response = await signUp(data.name, data.email, data.telefon, data.password);

    console.log("response createSignup", response);

    const body = await response.json();
    console.log(body);

    localStorage.setItem("userObject", JSON.stringify(response));
    console.log(localStorage.getItem("userObject"));

    //We are redirectiong to index page
  } catch (error) {
    console.log("error happened: ", error);
  }
}

export async function loginUser(data) {
  console.log("login data", data);

  try {
    const response = await login(data.email, data.password);
    console.log(response);

    localStorage.setItem("token", JSON.stringify(response.token));
    console.log(localStorage.getItem("token"));
  } catch (error) {
    console.log("error happened: ", error);
  }
}


