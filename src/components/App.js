
//import './App.css';
import '../index.css';
import Header from './Header.js';
import '../index.css';
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
    const [selectedCard, setSelectedCard] = React.useState('');
    const [cardToDelete, setCardToDelete] = React.useState(null);
    const [cards, setCards] = React.useState([])

    useEffect(()=>{
        api.getData()
            .then((cardsData)=> {
                setCards(cardsData);
            })
    },[]);

    
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            console.log(newCard);
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
         api.deleteCard(cardToDelete._id)
        .then((resp) => {
            const newCards = cards.filter(cardR => cardR._id !== cardToDelete._id);
            setCards(newCards);
            closeAllPopups();
            });
    }

    useEffect(()=>{
        api.getUserInfo()
        .then((userInfo)=> {
           setCurrentUser(userInfo);
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
        setSelectedCard('');
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
        api.setUserInfo(data)
        .then((resp)=> {
            setCurrentUser(resp);
            closeAllPopups()})
    }

    function handleUpdateAvatar(data){
        api.addAvatar(data.avatar).then((resp)=> {
            //console.log(resp);
            setCurrentUser(resp)
            closeAllPopups();
        })
    }

    function handleAddPlaceSubmit(data){
        api.addNewCard(data)
        .then((resp)=>{
            //console.log(resp);
            setCards([resp, ...cards]);
            closeAllPopups();
        })
    }

    function overlayClose(e){
        //console.log(e.target)
        if(isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isConfirmPopupOpen || selectedCard){
            //console.log(e.target);
            if(e.target.classList.contains('popup')){
            closeAllPopups();
        }
        }
        
    }

    function escapeClose(e){
        //console.log(e.key)
            if(e.key === 'Escape'){
            closeAllPopups();
            }
    }

  return (
<CurrentUserContext.Provider value={currentUser}>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Mesto</title>
    <div className="main" tabIndex={0} onKeyDown={escapeClose} onClick={overlayClose}>
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
