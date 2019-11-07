const api = "http://localhost:5000/api/";
//const api = "https://marmitapp-admin.herokuapp.com/api/";

const token = localStorage.token

const headers = {
  'Content-type': 'application/json',
  'x-auth-token': token
}

export const login = (body) =>
  fetch(`${api}auth/restaurants/`, { 
      mode: "no-cors",
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(res => res.json());