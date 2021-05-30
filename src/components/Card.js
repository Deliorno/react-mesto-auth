import bin from "../images/trash.svg";
import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
function Card(props){
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner === currentUser._id;
  
    const cardDeleteButtonClassName = (
        `gallery__trash-bin ${isOwn ? 'gallery__trash-bin_visible' : 'gallery__trash-bin_hidden'}`
      ); 
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    //console.log(props.card.likes)
    const isLiked = props.card.likes.some(i => i === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `gallery__item-like ${isLiked ? 'gallery__item-like_active' : ''}`
      ); 

     function handleClick() {
         props.onCardClick(props.card);
       } 

     function handleLikeClick(){
        props.onCardLike(props.card);
    }

    function handleDeleteClick(){
        props.onCardDelete(props.card);
    }
    return(
        <div className="gallery__item">
            <img className={cardDeleteButtonClassName} onClick={handleDeleteClick} src={bin} alt="Удалить"/>
            <img alt="Картинка" src={props.card.link } onClick={handleClick} className="gallery__item-pic"/>
                <div className="gallery__info">
                    <h2 className="gallery__item-title">{props.card.name}</h2>
                    <div className="gallery__likes" >
                        <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}/>
                        <p className="gallery__item-like-amount">{props.card.likes.length}</p>
                    </div>
                </div>
        </div>
    )
}
export default Card;