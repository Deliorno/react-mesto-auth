import Err from "../images/Err.svg";
import Ok from "../images/Ok.svg";
function InfoTooltip(props){
    //responsePic = 
    return(
        <div className={props.isOpen ? 'popup popup_display_flex' : 'popup'}>
                <div className="popup__container">
                    <button type="button" className="popup__close-cross" onClick={props.onClose}/>
                    <div className="popup__card">
                        <img src={props.isOk ? Ok : Err} className="popup__response"/>
                        <p className="popup__response-text">{props.isOk ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
                    </div>
                </div>
        </div>
    )
}

export default InfoTooltip;