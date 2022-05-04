import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import noImage from "../images/no-image.jpg";

function Card(card) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const trashButtonDisplay = `${isOwn ? "inline-block" : "none"}`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  function handleClick(e) {
    e.stopPropagation();
    card.onCardClick(card);
  }

  function handleTrashButtonClick(e) {
    e.stopPropagation();
    card.onTrashButtonClick(card);
  }

  function handleLikeClick() {
    card.onCardLike(card);
  }

  function handleImageLoadingError(e) {
    e.target.src = noImage;
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        onError={handleImageLoadingError}
      />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
      <button
        onClick={handleTrashButtonClick}
        className="card__trash-button"
        type="button"
        aria-label="Удалить карточку"
        style={{ display: trashButtonDisplay }}
      ></button>
    </article>
  );
}

export default Card;
