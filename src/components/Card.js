import bin from "../images/trash.svg"
function Card(props){

     function handleClick() {
         props.onCardClick(props.card);
       } 

    return(
        <div className="gallery__item">
            <img className='gallery__trash-bin' src={bin} alt="Удалить"/>
            <img alt="Картинка" src={props.card.src} onClick={handleClick} className="gallery__item-pic"/>
                <div className="gallery__info">
                <h2 className="gallery__item-title">{props.card.name}</h2>
                    <div className="gallery__likes">
                        <button type="button" className="gallery__item-like"></button>
                        <p className="gallery__item-like-amount">{props.card.likes.length}</p>
                    </div>
                </div>
        </div>
    )
}
export default Card;