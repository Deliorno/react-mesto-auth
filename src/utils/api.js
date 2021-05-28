const handleOriginalResponse = (res) => {
        if (res.ok){
            //console.log(res)
            return res.json();  
        }
        return Promise.reject(`Ошибка: ${res.status}`)
        .catch((err)=>{
         console.log(err)})
  }

class Api {
    constructor() {
      //super(props);
        this._urlCards = "https://api.deliorno.mesto-react.nomoredomains.icu/cards/";
        this._urlUserInfo = "https://api.deliorno.mesto-react.nomoredomains.icu/users/me/";
        this._headers = {
            'content-type': 'application/json',
            'authorization':'cc284eaa-be85-4547-943e-099c0aa22925'
          };
    }

    getData(){
       return fetch(this._urlCards, {
            method: 'GET',
            headers: this._headers
        })
        .then(handleOriginalResponse)
    }

    getUserInfo(){
        return fetch(this._urlUserInfo, {
             method: 'GET',
             headers: this._headers
         })
         .then(handleOriginalResponse)
     }

     setUserInfo(data){
        return fetch(this._urlUserInfo, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              name: data.name,
              about: data.about
            })
          }) 
          .then(handleOriginalResponse)
     }

     addNewCard(data){
        return fetch(this._urlCards, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
              name: data.place,
              link: data.link
            })
          }) 
          .then(handleOriginalResponse)
     }

     changeLikeCardStatus(cardId, isLiked){
         if(isLiked){
            return fetch(`${this._urlCards}likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers
              }) 
              .then(handleOriginalResponse)
         } else {
            return fetch(`${this._urlCards}likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers
              }) 
              .then(handleOriginalResponse)
         }
     }

     deleteCard(cardId){
        return fetch(`${this._urlCards}${cardId}`, {
            method: 'DELETE',
            headers: this._headers
          }) 
          .then(handleOriginalResponse)
     }

     addAvatar(link){
        return fetch(`${this._urlUserInfo}avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              avatar: link,
            })
          }) 
          .then(handleOriginalResponse)
     }
}
const api = new Api();
export default api;
