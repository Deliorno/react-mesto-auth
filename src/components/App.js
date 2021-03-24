
//import './App.css';
import '../index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import api from "../utils/api";
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmPopup from './ConfirmPopup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React, { useEffect } from "react";

function App() {
    const [currentUser, setCurrentUser] = React.useState([]);
    const [isEditProfilePopupOpen,setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen,setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = React.useState(false);
    const [isConfirmPopupOpen,setConfirmPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [cardToDelete, setCardToDelete] = React.useState(false);
    const [cards, setCards] = React.useState([])

    useEffect(()=>{
        api.getData()
            .then((cardsData)=> {
                const card = cardsData.map(card => {
                    return{
                        _id: card._id,
                        name: card.name,
                        likes: card.likes,
                        link: card.link,
                        owner: {_id: card.owner._id}
                    } 
                });
                setCards(card);
            })
    },[]);

    
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c)
            setCards(newCards)
            });
    } 

    function handleCardDelete(card){
        setCardToDelete(card);
        setConfirmPopupOpen(!isConfirmPopupOpen)
    }

    function confirmDeleteCard(e){
        e.preventDefault();
        console.log(cardToDelete)
         api.deleteCard(cardToDelete._id)
        .then((resp) => {
            //console.log(resp)
            });
        api.getData()
        .then((cardsRefreshed)=> {
            const newCards = cardsRefreshed.filter(cardR => cardR._id !== cardToDelete._id);
            setCards(newCards);
            closeAllPopups();
        })
    }

    useEffect(()=>{
        api.getUserInfo()
        .then((userInfo)=> {
            const cardsData = ()=>{
                return{
                    _id: userInfo._id,
                    name: userInfo.name,
                    avatar: userInfo.avatar,
                    about: userInfo.about
                }    
            };
           setCurrentUser(cardsData());
        })
   },[])

   //console.log(currentUser);

    function handleCardClick (selectedCard){
        setSelectedCard(selectedCard)
    }

    function closeAllPopups(){
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
        setConfirmPopupOpen(false);
    }

    function handleEditAvatarClick(){
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    }

    function handleEditProfileClick(){
        setEditProfilePopupOpen(!isEditProfilePopupOpen)
    }

    function handleAddPlaceClick(){
        setAddPlacePopupOpen(!isAddPlacePopupOpen)
    }

    function handleUpdateUser(data){
        api.setUserInfo(data).then((resp)=> {
            setCurrentUser(resp)})
            closeAllPopups()
    }

    function handleUpdateAvatar(data){
        api.addAvatar(data.avatar).then((resp)=> {
            console.log(resp);
            setCurrentUser(resp)
            closeAllPopups();
        })
    }

    function handleAddPlaceSubmit(data){
        api.addNewCard(data)
        .then((resp)=>{
            console.log(resp);
            setCards([resp, ...cards]);
            closeAllPopups();
        })
    }

    function overlayClose(e){
        if((isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isConfirmPopupOpen) === true){
            if(String(e.target.classList) === 'popup popup_display_flex'){
            closeAllPopups();
        }
        }
        
    }

    function escapeClose(e){
        console.log(e.key)
        if((isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isConfirmPopupOpen) === true){
            if(e.key === 'Escape'){
            closeAllPopups();
            }
        }
        
    }

  return (
<CurrentUserContext.Provider value={currentUser}>
<header>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="./index.css"/>
    <title>Mesto</title>
</header>
<div className="main" onKeyDown={escapeClose} onClick={overlayClose}>
    <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
    <EditAvatarPopup onUpdateAvatar ={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    <EditProfilePopup onUpdateUser ={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
    <AddPlacePopup onAddPlaceSubmit ={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} /> 
    <ConfirmPopup onSubmit={confirmDeleteCard} onClose={closeAllPopups} isOpen={isConfirmPopupOpen}/>
    <Header />
    <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
    <Footer />
</div>
</CurrentUserContext.Provider>
  );
}

export default App;
