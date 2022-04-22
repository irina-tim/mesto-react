function Card(card) {
  function handleClick() {
    card.onCardClick(card);
  }

  return (
    <article className="card" onClick={handleClick}>
      <img className="card__image" src={card.link} alt={card.name} />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            className="card__like-button"
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
      <button
        className="card__trash-button"
        type="button"
        aria-label="Удалить карточку"
      ></button>
    </article>
  );
}

export default Card;
