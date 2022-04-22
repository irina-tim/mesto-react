import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile page__profile">
          <div
            className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            onClick={props.onAddPlace}
            className="profile__add-button"
            type="button"
            aria-label="Добавить карточку"
          ></button>
        </section>
        <section
          className="cards page__cards"
          aria-label="Карточки с фотографиями"
        >
          {cards.map((card) => (
            <Card {...card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
