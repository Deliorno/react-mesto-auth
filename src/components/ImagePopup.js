function ImagePopup(props){
    //console.log(props.card)
    return(
        <div className={props.card ? 'popup popup_display_flex' : 'popup'} id="popup_image">
            <div className="popup__container">
                <button type="button" className="popup__close-cross" onClick={props.onClose}/>
                <img className = 'popup__image' src={String(props.card.link)} alt='картинка'/> 
                <p className="popup__subtitle">{props.card.name}</p>
            </div>
        </div>)
    }
export default ImagePopup;