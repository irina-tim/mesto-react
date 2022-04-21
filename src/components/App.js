import React from "react";
//import noImagePath from "../images/no-image.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  //Popups state
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  //Popups handlers
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          isOpened={isEditProfilePopupOpen}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
        <PopupWithForm //Profile edit popup
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={"profile-edit"}
          title={"Редактировать профиль"}
          submitButtonText={"Сохранить"}
          children={
            <>
              <div className="popup__field">
                <input
                  id="name-input"
                  className="popup__input popup__input_type_name"
                  type="text"
                  name="name"
                  //value=""
                  placeholder="Имя"
                  required
                  minLength="2"
                  maxLength="40"
                />
                <span className="name-input-error popup__input-error"></span>
              </div>
              <div className="popup__field">
                <input
                  id="description-input"
                  className="popup__input popup__input_type_description"
                  type="text"
                  name="description"
                  //value=""
                  placeholder="Описание"
                  required
                  minLength="2"
                  maxLength="200"
                />
                <span className="description-input-error popup__input-error"></span>
              </div>
            </>
          }
        />
        <PopupWithForm //Add card popup
          isOpened={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={"add-card"}
          title={"Новое место"}
          submitButtonText={"Сохранить"}
          children={
            <>
              <div className="popup__field">
                <input
                  id="card-title-input"
                  className="popup__input popup__input_type_card-title"
                  type="text"
                  name="title"
                  //value=""
                  placeholder="Название"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span className="card-title-input-error popup__input-error"></span>
              </div>
              <div className="popup__field">
                <input
                  id="image-link-input"
                  className="popup__input popup__input_type_image-link"
                  type="url"
                  name="link"
                  //value=""
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="image-link-input-error popup__input-error"></span>
              </div>
            </>
          }
        />
        <PopupWithForm //Update avatar popup
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={"avatar-update"}
          title={"Обновить аватар"}
          submitButtonText={"Сохранить"}
          children={
            <>
              <div className="popup__field">
                <input
                  id="avatar-link-input"
                  className="popup__input popup__input_type_avatar-link"
                  type="url"
                  name="link"
                  //value=""
                  placeholder="Ссылка на новый аватар"
                  required
                />
                <span className="avatar-link-input-error popup__input-error"></span>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}

export default App;
