import PopupWithForm from './PopupWithForm.js';
import React from "react";
function AddPlacePopup(props){
    const place = React.useRef();
    const link = React.useRef();
function handleSubmit(e){
    e.preventDefault();
    props.onAddPlaceSubmit(
        {place:place.current.value, 
        link:link.current.value}
        )
    }
return(
    <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="addCard" title="Новое место">
            <div className="popup__field">
                <input ref={place} className="popup__row" type="text" minLength="2" maxLength="30" name="place" id="place"  placeholder="Название" required/>
                <span className="popup__row-error place-error"/>
            </div>
            <div className="popup__field">
                <input ref={link} className="popup__row" type="url" name="link" id="link"  placeholder="Ссылка на картинку" required/>
                <span className="popup__row-error link-error"/>
            </div>
    </PopupWithForm>
)
}
export default AddPlacePopup