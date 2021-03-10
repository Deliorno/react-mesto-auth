
//import './App.css';
import '../index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from "react";

function App() {
    const [isEditProfilePopupOpen,setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen,setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    function handleCardClick (selectedCard){
        setSelectedCard(selectedCard)
    }

    function closeAllPopups(){
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    function handleEditAvatarClick(){
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
        // document.querySelector('#editAvatar').classNameList.add('popup_display_flex')
    }

    function handleEditProfileClick(){
        setEditProfilePopupOpen(!isEditProfilePopupOpen)
    }

    function handleAddPlaceClick(){
        setAddPlacePopupOpen(!isAddPlacePopupOpen)
    }

  return (
<>
<header>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="./index.css"/>
    <title>Mesto</title>
</header>
<div className="main">
    <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
    <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="editAvatar" title="Обновить аватар">
            <div className="popup__field">
                <input className="popup__row" type="url" name="link_avatar" id="avatar" required defaultValue="" placeholder="Сылка на изображение"/>
                <span className="popup__row-error avatar-error"/>
            </div>  
    </PopupWithForm>
    <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="editProfile" title="Редактировать профиль">
            <div className="popup__field">
                <input className="popup__row" name="name" type="text" minLength="2" maxLength="40" required id="name" defaultValue="" placeholder="Ваше имя"/>
                <span className="popup__row-error name-error"/>
            </div>
            <div className="popup__field">
                <input className="popup__row" name="about" type="text" id="job" minLength="2" required maxLength="200" defaultValue="" placeholder="Чем занимаетесь?"/>
                <span className="popup__row-error job-error"/>
            </div>
    </PopupWithForm>
    <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="addCard" title="Новое место">
            <div className="popup__field">
                <input className="popup__row" type="text" minLength="2" maxLength="30" name="place" id="place"  placeholder="Название" required/>
                <span className="popup__row-error place-error"/>
            </div>
            <div className="popup__field">
                <input className="popup__row" type="url" name="link" id="link"  placeholder="Ссылка на картинку" required/>
                <span className="popup__row-error link-error"/>
            </div>
    </PopupWithForm>
    <PopupWithForm onClose={closeAllPopups} isOpen={''} name="deleteCard" title="Вы уверены?"/>
    <Header />
    <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
    <Footer />
</div>
</>
  );
}

export default App;
