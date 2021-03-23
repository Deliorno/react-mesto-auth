import {CurrentUserContext} from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm.js';
import React from "react";

function EditProfilePopup(props){
    const [name, setName] = React.useState('');
    const [description, setDescription ] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

function handleNameChange(e) {
    setName(e.target.value);
}

function handleAboutChange(e) {
    setDescription(e.target.value);
}

function handleSubmit(e){
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    console.log(name,description)
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
        name: name,
        about: description,
    });
}
return(
<PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="editProfile" title="Редактировать профиль">
            <div className="popup__field">
                <input className="popup__row" name="name" type="text" minLength="2" maxLength="40" required id="name" defaultValue={name} onChange={handleNameChange} placeholder="Ваше имя"/>
                <span className="popup__row-error name-error"/>
            </div>
            <div className="popup__field">
                <input className="popup__row" name="about" type="text" id="job" minLength="2" required maxLength="200" defaultValue={description} onChange={handleAboutChange} placeholder="Чем занимаетесь?"/>
                <span className="popup__row-error job-error"/>
            </div>
</PopupWithForm>
)}

export default EditProfilePopup;