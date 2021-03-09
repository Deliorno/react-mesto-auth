function PopupWithForm(props){
    return(
        <>
        <div className={props.isOpen ? 'popup popup_display_flex' : 'popup'} id={props.id}>
            <div className="popup__container">
                <button type="button" className="popup__close-cross" onClick={props.onClose}></button>
                <form name={props.name} className="popup__card">
                    <h2 className="popup__header">{props.title}</h2>
                    {props.children}
                    <button className="popup__btn" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    </>
    )
}
export default PopupWithForm;