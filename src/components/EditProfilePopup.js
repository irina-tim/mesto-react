import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpened]);

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
    >
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
            value={name || ""}
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
    </PopupWithForm>
  );
}

export default EditProfilePopup;
