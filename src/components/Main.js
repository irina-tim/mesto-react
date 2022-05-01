import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <main className="content">
        <section className="profile page__profile">
          <div
            className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
            <p className="profile__subtitle">{currentUser.about}</p>
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
          {props.cards.map((card) => (
            <Card
              {...card}
              key={card._id}
              onCardClick={props.onCardClick}
              onTrashButtonClick={props.onTrashButtonClick}
              onCardLike={props.onCardLike}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
