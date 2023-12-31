export async function signUp(name:any, email:any, telefon:any, password:any) {
  const response = await fetch("http://localhost:3006/" + "user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      telefon,
      password,
      returnSecureToken: true,
    }),
  });
  console.log("response signUp", response);
  return response;
}

export async function login(email:any, password:any) {
  const response = await fetch("http://localhost:3006/" + "user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }),
  });

  const jsonResponse = await response.json();

  console.log(jsonResponse);

  return jsonResponse;
}

//A function, to retrieve the stored user information
/* export function userAuthValidation() {
  const token = localStorage.getItem("token");
  return token;
}
*/

export function userAuthValidation() {
  const userObject = localStorage.getItem("userObject");
  return userObject;
}
