import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleEditProfileButtonClick(e) {
    e.stopPropagation();
    props.onEditProfile();
  }

  function handleAddPlaceClick(e) {
    e.stopPropagation();
    props.onAddPlace();
  }

  function handleAvatarEditClick(e) {
    e.stopPropagation();
    props.onEditAvatar();
  }

  return (
    <main className="content">
      <section className="profile page__profile">
        <div
          className="profile__avatar"
          onClick={handleAvatarEditClick}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            onClick={handleEditProfileButtonClick}
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать профиль"
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
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
  );
}

export default Main;
