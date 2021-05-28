
//import './App.css';
import * as auth from '../utils/auth';
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
import Register from './Register.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import ProtectedRoute from './ProtectedRoute.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

function App() {
    const [currentUser, setCurrentUser] = React.useState([]);
    const [isEditProfilePopupOpen,setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen,setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = React.useState(false);
    const [isConfirmPopupOpen,setConfirmPopupOpen] = React.useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('');
    const [cardToDelete, setCardToDelete] = React.useState(null);
    const [cards, setCards] = React.useState([])
    //const [headerTitle, setHeaderTitle] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [tooltip, setTooltip] = React.useState(false);
    const [email, setEmail] = React.useState(null);
    const history = useHistory();

    useEffect(()=>{
        console.log(loggedIn);
        api.getData()
            .then((cardsData)=> {
                setCards(cardsData);
            })
    },[]);
    useEffect(()=>{
        tokenCheck();
    },[]);

    function signOut(){
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        history.push('/sign-in');
        console.log(localStorage)
      }

    function tokenCheck () {
        // если у пользователя есть токен в localStorage,
        // эта функция проверит валидность токена
        const jwt = localStorage.getItem('jwt');
        //console.log('Токен',jwt)
        if (jwt){
          // проверим токен
          auth.getToken(jwt)
          .then((res) => {
            if (res){
                setEmail(res.data.email)
                //console.log('Валидный токен => Авторизуем')
                //console.log('Авторизуем')
                // авторизуем пользователя
                setLoggedIn(true);
            }
          }); 
        }
      } 

    
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
        setInfoTooltipOpen(false);
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

    React.useEffect(()=>{
        console.log('loggedIn ?',loggedIn)
        if (loggedIn){
            console.log("Переправка на профиль")
            history.push('/profile');
        }
    },[loggedIn, email])

    function handleLogIn(password, email){
        auth.logIn(password, email)
        .then((data)=>{
            if (data === 'Err'){
            } else {
                //setTooltip(!tooltip)
                //console.log(data.token)
                localStorage.setItem('jwt', data.token);
                setLoggedIn(true);
                //console.log("эх",loggedIn)
                history.push('/profile');
            }
        })
    }

    function handleRegistration(password, email){
        //console.log(passwordInput, emailInput);
        auth.register(password, email)
            .then((data)=>{
                if (data === 'Err'){
                    setTooltip(false)
                    setInfoTooltipOpen(true);
                } else {
                    setTooltip(true)
                    setInfoTooltipOpen(true);
                    history.push('/sign-in');
                }
            })
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
        {loggedIn && <Header email={email} loggedIn={loggedIn} title={"Выйти"} link='/sign-in' signOut={signOut}/>}
        <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
        <EditAvatarPopup onUpdateAvatar ={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup onUpdateUser ={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
        <AddPlacePopup onAddPlaceSubmit ={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ConfirmPopup onSubmit={confirmDeleteCard} onClose={closeAllPopups} isOpen={isConfirmPopupOpen}/>
        <Switch>
                <Route exact path="/">
                    {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/sign-in" />}
                </Route> 
                <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Main}
                    cards={cards} 
                    onCardLike={handleCardLike} 
                    onCardDelete={handleCardDelete} 
                    onCardClick={handleCardClick} 
                    onEditProfile={handleEditProfileClick} 
                    onAddPlace={handleAddPlaceClick} 
                    onEditAvatar={handleEditAvatarClick}
                    />
                <Route path="/sign-up">
                    <InfoTooltip isOk={tooltip} isOpen={isInfoTooltipOpen} onClose={closeAllPopups}/>
                    <Header title={'Войти'} link='/sign-in'/>
                    <Register onRegister={handleRegistration}/>
                </Route>
                <Route path="/sign-in">
                    <InfoTooltip isOk={tooltip} isOpen={isInfoTooltipOpen} onClose={closeAllPopups}/>
                    <Header title={'Регистрация'} link='/sign-up'/>
                    <Login onLogIn={handleLogIn}/>
                </Route>
        </Switch>
        <Footer />

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
