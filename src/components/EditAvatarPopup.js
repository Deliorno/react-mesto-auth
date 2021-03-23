import PopupWithForm from './PopupWithForm.js';
import React from "react";
function EditAvatarPopup(props){
    //console.log(props.isOpen)
    const avatar = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatar.current.value,
        });
      } 

    return(
    <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="editAvatar" title="Обновить аватар">
            <div className="popup__field">
                <input ref={avatar} className="popup__row" type="url" name="link_avatar" id="avatar" required defaultValue="" placeholder="Сылка на изображение"/>
                <span className="popup__row-error avatar-error"/>
            </div>  
    </PopupWithForm>
    )
}
export default EditAvatarPopup;