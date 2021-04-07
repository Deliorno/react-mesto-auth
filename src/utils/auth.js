export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
    console.log(JSON.stringify({"password":password, "email":email}))
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"password":password, "email":email})
  })
  .then((response) => {
    console.log(response)
    console.log(response.status)
      if (response.ok){
          console.log(response);  
        return ({resp:response.json(), status:response.status});
      } else {
          console.log('Ошибка');
          Promise.reject(`Ошибка: ${response.status}`)
          return ('Err')
      }
    }
  )};

  export const logIn = (password, email) => {
    console.log(JSON.stringify({"password":password, "email":email}))
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"password":password, "email":email})
  })
  .then((response) => {
    console.log(response)
    console.log(response.status)
      if (response.ok){
          console.log(response);  
        return (response.json());
      } else {
          console.log('Ошибка');
          Promise.reject(`Ошибка: ${response.status}`)
          return ('Err')
      }
    }
  )};

  export const getToken = (token) => {
    //console.log(JSON.stringify({"password":password, "email":email}))
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    //body: JSON.stringify({"password":password, "email":email})
  })
  .then((response) => {
    console.log(response)
    console.log(response.status)
      if (response.ok){
          console.log(response);  
        return ({resp:response.json(), status:response.status});
      } else {
          console.log('Ошибка');
          Promise.reject(`Ошибка: ${response.status}`)
          return ('Err')
      }
    }
  )};