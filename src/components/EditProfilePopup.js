import {CurrentUserContext} from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm.js';
import React from "react";

function EditProfilePopup(props){
    const [name, setName] = React.useState('');
    const [description, setDescription ] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    const [nameErrorMessage, setNameErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [jobErrorMessage, setJobErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [isValid, setIsValid] = React.useState(true);

    const nameRef = React.useRef();
    const aboutRef = React.useRef();

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    React.useEffect(() => {
        function fromValidity(){
            if((nameErrorMessage.isValid && jobErrorMessage.isValid) === true){
                setIsValid(true)
            } else {
                setIsValid(false)
            }
        }

        fromValidity()
      }, [nameErrorMessage,jobErrorMessage])

    React.useEffect(() => {
        function resetFields(){
            nameRef.current.value=name;
            aboutRef.current.value=description;
            setNameErrorMessage({errorMessage:'', isValid:true});
            setJobErrorMessage({errorMessage:'', isValid:true})
          }
        resetFields()
      }, [props.isOpen])

    function handleNameChange(e) {
    //setName(e.target.value);
    setNameErrorMessage({errorMessage:e.target.validationMessage, isValid:e.target.checkValidity()})
   // fromValidity()
}
function handleAboutChange(e) {
    //setDescription(e.target.value);
    setJobErrorMessage({errorMessage:e.target.validationMessage, isValid:e.target.checkValidity()})
}

function handleSubmit(e){
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
        name: nameRef.current.value,
        about: aboutRef.current.value,
    });
}

return(
<PopupWithForm isValid={isValid} onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="editProfile" title="Редактировать профиль">
            <div className="popup__field">
                <input ref={nameRef} className="popup__row" name="name" type="text" minLength="2" maxLength="40" required id="name" defaultValue={name} onChange={handleNameChange} placeholder="Ваше имя"/>
                <span className="popup__row-error_active name-error">{nameErrorMessage.errorMessage}</span>
            </div>
            <div className="popup__field">
                <input ref={aboutRef} className="popup__row" name="about" type="text" id="job" minLength="2" required maxLength="200" defaultValue={description} onChange={handleAboutChange} placeholder="Чем занимаетесь?"/>
                <span className="popup__row-error_active job-error">{jobErrorMessage.errorMessage}</span>
            </div>
</PopupWithForm>
)}

export default EditProfilePopup;