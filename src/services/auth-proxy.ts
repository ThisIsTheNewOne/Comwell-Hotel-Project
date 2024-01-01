
export async function signUp(name: string, email: string, postnummer: string, telefon: string, password: any, confirmPassword?: string, gender?: string, birthdate?: string) {
  const response = await fetch("http://localhost:3006/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "userId": email,
      "username": email.split('@')[0],
      "password": password,
      "fullname": name,
      "email": email,
      "postNr": postnummer,
      "phoneNr": telefon,
    }),
  });
  console.log(response);
  return response;
}

export async function login(username: string, password: string) {

  const response = await fetch("http://localhost:3006/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.split('@')[0],
      password,
    }),
  });

  const jsonResponse = await response.json();

  console.log(jsonResponse);
 

  return jsonResponse;
}

//A function, to retrieve the stored user information
export function userAuthValidation() {
  const token = localStorage.getItem("token");
  return token;
}
