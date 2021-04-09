function PopupWithForm(props){
    return(
        <>
            <div className={props.isOpen ? 'popup popup_display_flex' : 'popup'}>
                <div className="popup__container">
                    <button type="button" className="popup__close-cross" onClick={props.onClose}/>
                    <form id={props.name} name={props.name} onSubmit={props.onSubmit} className="popup__card">
                        <h2 className="popup__header">{props.title}</h2>
                        {props.children}
                        <button disabled={props.isValid ? '' : 'disabled'} className={props.isValid ? 'popup__btn' : 'popup__btn popup__btn_disabled'} type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default PopupWithForm;