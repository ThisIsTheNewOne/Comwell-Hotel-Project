import { signUp, login } from "./auth-proxy";

export async function createSignup(name: string, email: string, postnummer: string, telefon: string, password: any, confirmPassword?: string, gender?: string, birthdate?: string) {
  try {
    const response = await signUp(name, email, postnummer, telefon, password, confirmPassword, gender, birthdate);

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

export async function loginUser(data: { email: any; password: any; }) {
  console.log("login data", data);

  try {
    const response = await login(data.email, data.password);
    console.log(response);

    localStorage.setItem("token", response.token.access_token);
    localStorage.setItem("currentUser", JSON.stringify(response.user));
  } catch (error) {
    console.log("error happened: ", error);
  }
}
