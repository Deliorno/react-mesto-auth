import api from "../utils/Api";
import React, { useEffect } from "react";
import Card from "./Card.js";
function Main(porps){
    const [userAvatar, setUserAvatar] = React.useState([])
    const [userName, setUserName] = React.useState([])
    const [userDescription, setUserDescription] = React.useState([])
    const [cards, setCards] = React.useState([])
    useEffect(()=>{
         api.getUserInfo()
            .then((userInfo)=> {
                console.log(userInfo);
                setUserAvatar(userInfo.avatar);
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
            })
        
        api.getData()
            .then((cardsData)=> {
                console.log(cardsData)
                const card = cardsData.map(card => {
                    return{
                        id: card._id,
                        name: card.name,
                        likes: card.likes,
                        src: card.link,
                        userId: card.owner._id
                    }

                     
                });
                setCards(card);
            })
    },[])
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-overlay" onClick={porps.onEditAvatar}/> 
                    <div style={{ backgroundImage: `url(${userAvatar})` }}  className="profile__avatar"/>
                    <div className="profile__text-info">
                        <div className="profile__row">
                            <h1 className="profile__name" id="profile__name">{userName}</h1>
                            <button type="button" className="profile__settings" onClick={porps.onEditProfile} id="settings"/>
                        </div>
                        <p className="profile__status" id="profile__status">{userDescription}</p>
                    </div> 
                </div>
                <button type="button" id="add_btn" className="profile__add-btn" onClick={porps.onAddPlace }/>
            </section>
            <section className="gallery">
                {cards.map((card)=>{
                    return(
                        <Card card={card} key={card.id} onCardClick={porps.onCardClick}/>
                        )
                })}
            </section>
    </main>
    )
}
export default Main;
