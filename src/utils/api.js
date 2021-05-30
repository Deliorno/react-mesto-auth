import * as auth from "./auth";

let token = "";
const jwt = localStorage.getItem('jwt');
auth.getToken(jwt)
  .then((res) => {
    //console.log(res)
    token = res;
  });

const handleOriginalResponse = (res) => {
        //console.log(res)
        if (res.ok){
            return res.json();  
        }
        return Promise.reject(`Ошибка: ${res.status}`)
        .catch((err)=>{
         console.log(err)})
  }

class Api {
    constructor() {
      //super(props);
        this._urlCards = "http://localhost:3005/cards";
        this._urlUserInfo = "http://localhost:3005/users/me";
        // this._headers = {
        //     'content-type': 'application/json',
        //     'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        //   };
    }

    getData(token){
       return fetch(this._urlCards, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        })
        .then(handleOriginalResponse)
    }

    getUserInfo(token){
        return fetch(this._urlUserInfo, {
             method: 'GET',
             headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
         })
         .then(handleOriginalResponse)
     }

     setUserInfo(data, token){
        return fetch(this._urlUserInfo, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              name: data.name,
              about: data.about
            })
          }) 
          .then(handleOriginalResponse)
     }

     addNewCard(data,token){
        return fetch(this._urlCards, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              name: data.place,
              link: data.link
            })
          }) 
          .then(handleOriginalResponse)
     }

     changeLikeCardStatus(cardId, isLiked,token){
         if(isLiked){
            return fetch(`${this._urlCards}/${cardId}/likes`, {
                method: 'PUT',
                headers: {
                  'content-type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }
              }) 
              .then(handleOriginalResponse)
         } else {
            return fetch(`${this._urlCards}/${cardId}/likes`, {
                method: 'DELETE',
                headers: {
                  'content-type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }
              }) 
              .then(handleOriginalResponse)
         }
     }

     deleteCard(cardId,token){
        return fetch(`${this._urlCards}/${cardId}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }) 
          .then(handleOriginalResponse)
     }

     addAvatar(link,token){
        return fetch(`${this._urlUserInfo}/avatar`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              avatar: link,
            })
          }) 
          .then(handleOriginalResponse)
     }
}
const api = new Api();
export default api;
