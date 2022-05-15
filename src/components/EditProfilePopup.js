import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);
  const checks = ["valueMissing", "tooShort"];
  const errorMessage = "Please use at least 2 characters";
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const checkValidity = (e) => {
    const { validity } = e.target;
    const checksPassed = checks.filter((check) => validity[check]).length === 0;
    if (e.target.name === "name") setIsNameValid(checksPassed);
    if (e.target.name === "description") setIsDescriptionValid(checksPassed);
  };

  useEffect(() => {
    if (isNameValid && isDescriptionValid) setIsSubmitButtonEnabled(true);
    else setIsSubmitButtonEnabled(false);
  }, [isDescriptionValid, isNameValid]);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setIsNameValid(true);
    setIsDescriptionValid(true);
    setIsSubmitButtonEnabled(true);
  }, [currentUser, props.isOpened]);

  function handleNameChange(e) {
    setName(e.target.value);
    checkValidity(e);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    checkValidity(e);
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
      isSubmitButtonEnabled={isSubmitButtonEnabled}
    >
      <>
        <div className="popup__field">
          <input
            id="name-input"
            className={`popup__input popup__input_type_name ${
              !isNameValid && "popup__input_type_error"
            }`}
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            onChange={handleNameChange}
            value={name || ""}
          />
          <span
            className={`name-input-error popup__input-error ${
              !isNameValid && "popup__input-error_visible"
            }`}
          >
            {!isNameValid && errorMessage}
          </span>
        </div>
        <div className="popup__field">
          <input
            id="description-input"
            className={`popup__input popup__input_type_description ${
              !isDescriptionValid && "popup__input_type_error"
            }`}
            type="text"
            name="description"
            placeholder="Описание"
            required
            minLength="2"
            maxLength="200"
            onChange={handleDescriptionChange}
            value={description}
          />
          <span
            className={`description-input-errorr popup__input-error ${
              !isDescriptionValid && "popup__input-error_visible"
            }`}
          >
            {!isDescriptionValid && errorMessage}
          </span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
