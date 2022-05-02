import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"profile-edit"}
      title={"Редактировать профиль"}
      submitButtonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      children={
        <>
          <div className="popup__field">
            <input
              id="name-input"
              className="popup__input popup__input_type_name"
              type="text"
              name="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
              onChange={handleNameChange}
              value={name}
            />
            <span className="name-input-error popup__input-error"></span>
          </div>
          <div className="popup__field">
            <input
              id="description-input"
              className="popup__input popup__input_type_description"
              type="text"
              name="description"
              placeholder="Описание"
              required
              minLength="2"
              maxLength="200"
              onChange={handleDescriptionChange}
              value={description}
            />
            <span className="description-input-error popup__input-error"></span>
          </div>
        </>
      }
    />
  );
}

export default EditProfilePopup;
