import PopupWithForm from './PopupWithForm.js';
import React from "react";
function EditAvatarPopup(props){
  const [avatarErrorMessage, setAvatarErrorMessage] = React.useState({errorMessage:'', isValid:false});
  const [isValid, setIsValid] = React.useState(true);
    //console.log(props.isOpen)
  const avatar = React.useRef();

  function setFormValid(){
    //console.log(avatarErrorMessage.isValid,avatarErrorMessage.errorMessage)
    setIsValid(avatarErrorMessage.isValid)
  }
    React.useEffect(() => {
      setFormValid()
    }, [avatarErrorMessage])

    React.useEffect(() => {
      function resetFields(){
        avatar.current.value="";
        setAvatarErrorMessage({errorMessage:'', isValid:false});
      }
      resetFields()
    }, [props.isOpen])
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
          avatar: avatar.current.value,
        });
      }   

      function setErrMessage(e) {
        setAvatarErrorMessage({errorMessage:e.target.validationMessage, isValid:e.target.checkValidity()})
    }

    return(
    <PopupWithForm isValid={isValid} onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="editAvatar" title="Обновить аватар">
            <div className="popup__field">
                <input onChange={setErrMessage} ref={avatar} className="popup__row" type="url" name="link_avatar" id="avatar" required defaultValue="" placeholder="Сылка на изображение"/>
                <span className="popup__row-error_active avatar-error">{avatarErrorMessage.errorMessage}</span>
            </div>  
    </PopupWithForm>
    )
}
export default EditAvatarPopup;