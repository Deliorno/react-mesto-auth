import React from "react";
import Card from "./Card.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
function Main(props){
    const currentUser = React.useContext(CurrentUserContext);
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-overlay" onClick={props.onEditAvatar}/> 
                    <div style={{ backgroundImage: `url(${currentUser.avatar})` }}  className="profile__avatar"/>
                    <div className="profile__text-info">
                        <div className="profile__row">
                            <h1 className="profile__name" id="profile__name">{currentUser.name}</h1>
                            <button type="button" className="profile__settings" onClick={props.onEditProfile} id="settings"/>
                        </div>
                        <p className="profile__status" id="profile__status">{currentUser.about}</p>
                    </div> 
                </div>
                <button type="button" id="add_btn" className="profile__add-btn" onClick={props.onAddPlace }/>
            </section>
            <section className="gallery">
                {props.cards.map((card)=>{
                    return(
                        <Card onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} card={card} key={card._id} onCardClick={props.onCardClick}/>
                        )
                })}
            </section>
    </main>
    )
}
export default Main;
