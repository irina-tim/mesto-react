function Main(props) {
  return (
    <>
      <main className="content">
        <section className="profile page__profile">
          <div className="profile__avatar" onClick={props.onEditAvatar}></div>
          <div className="profile__info">
            <h1 className="profile__title"></h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
            <p className="profile__subtitle"></p>
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
        ></section>
      </main>
    </>
  );
}

export default Main;
