
import { signUp, login } from "./auth-proxy";


export async function createSignup(name: string, email: string, postnummer: string, telefon: string, password: any, confirmPassword?: string, gender?: string, birthdate?: string) {
  try {
    const response = await signUp(name, email, postnummer, telefon, password, confirmPassword, gender, birthdate);

    //We are redirectiong to index page
    if (response.ok) {
      console.log("User created successfully");
      location.reload();
    } else {
      console.error("Failed to create user");
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function loginUser(data: { email: any; password: any; }) {
  console.log("login data", data);

  try {
    const response = await login(data.email, data.password);
 
    console.log(response);

    localStorage.setItem("token", response.token.access_token);
    localStorage.setItem("currentUser", JSON.stringify(response.user));

    return response
  } catch (error) {
    console.log("error happened: ", error);
  }
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
