export async function signUp(email, password) {
  const response = await fetch("http://localhost:3006/" + "user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
  console.log("response signUp",response);
  return response;
}

export async function login(username, password) {
  const response = await fetch("http://localhost:3006/" + "user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
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