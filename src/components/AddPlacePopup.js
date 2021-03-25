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
    
const [placeErrorMessage, setPlaceErrorMessage] = React.useState({errorMessage:'', isValid:false});
const [linkErrorMessage, setLinkErrorMessage] = React.useState({errorMessage:'', isValid:false});
const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
        function fromValidity(){
            setIsValid(placeErrorMessage.isValid && linkErrorMessage.isValid);
    }
      fromValidity()

    }, [placeErrorMessage, linkErrorMessage])

    React.useEffect(() => {
        function resetFields(){
            place.current.value="";
            link.current.value="";
            setPlaceErrorMessage({errorMessage:'', isValid:false});
            setLinkErrorMessage({errorMessage:'', isValid:false})
          }

        resetFields()
      }, [props.isOpen])

    function handleAddCard(){
        setPlaceErrorMessage({errorMessage:place.current.validationMessage, isValid:place.current.checkValidity()})
        setLinkErrorMessage({errorMessage:link.current.validationMessage, isValid:link.current.checkValidity()})
    }

return(
    <PopupWithForm isValid={isValid} onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="addCard" title="Новое место">
            <div className="popup__field">
                <input onChange={handleAddCard} ref={place} className="popup__row" type="text" minLength="2" maxLength="30" name="place" id="place"  placeholder="Название" required/>
                <span className="popup__row-error_active place-error">{placeErrorMessage.errorMessage}</span>
            </div>
            <div className="popup__field">
                <input onChange={handleAddCard} ref={link} className="popup__row" type="url" name="link" id="link"  placeholder="Ссылка на картинку" required/>
                <span className="popup__row-error_active link-error">{linkErrorMessage.errorMessage}</span>
            </div>
    </PopupWithForm>
)
}
export default AddPlacePopup