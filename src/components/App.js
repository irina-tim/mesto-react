import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  //Popups state
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] =
    React.useState(false);

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

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardTrashClick() {
    setIsCardDeletePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsCardDeletePopupOpen(false);
    setSelectedCard({});
  }

  const [currentUser, setCurrentUser] = React.useState({});
  //const [isLoadingUserData, setIsLoadingUserData] = React.useState(false);

  React.useEffect(() => {
    //setIsLoadingUserData(true);
    api
      .getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //setIsLoadingUserData(false);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          isOpened={isEditProfilePopupOpen}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onTrashButtonClick={handleCardTrashClick}
        />
        <Footer />
        <EditProfilePopup
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="image-link-input-error popup__input-error"></span>
              </div>
            </>
          }
        />
        <EditAvatarPopup
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm //Deletion confirmation popup
          isOpened={isCardDeletePopupOpen}
          onClose={closeAllPopups}
          name={"deletion-confirmation"}
          title={"Вы уверены?"}
          submitButtonText={"Да"}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
