import { signUp, login } from "./auth-proxy";

export async function createSignup(name: string, email: string, postnummer: string, telefon: string, password: any, confirmPassword?: string, gender?: string, birthdate?: string) {
  try {
    const response = await signUp(name, email, postnummer, telefon, password, confirmPassword, gender, birthdate);

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

export async function loginUser(data: { email: any; password: any; }) {
  console.log("login data", data);

  try {
    const response = await login(data.email, data.password);
    console.log(response);

    localStorage.setItem("token", response.token);
    localStorage.setItem("currentUser", response.user);
    console.log(localStorage.getItem("token"));
  } catch (error) {
    console.log("error happened: ", error);
  }
}
