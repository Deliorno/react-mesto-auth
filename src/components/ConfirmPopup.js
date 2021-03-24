import PopupWithForm from './PopupWithForm.js';
import React from "react";
function ConformPopup(props){
    return(
        <PopupWithForm onSubmit={props.onSubmit} isValid={true} onClose={props.onClose} isOpen={props.isOpen} name="deleteCard" title="Вы уверены?"/>
    )
}
export default ConformPopup;