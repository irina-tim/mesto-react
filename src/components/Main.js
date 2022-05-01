import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([initialCards]) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

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
          {cards.map((card) => (
            <Card
              {...card}
              key={card._id}
              onCardClick={props.onCardClick}
              onTrashButtonClick={props.onTrashButtonClick}
              onCardLike={handleCardLike}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
