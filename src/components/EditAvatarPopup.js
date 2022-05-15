import { useRef, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef(null);
  const checks = ["typeMismatch"];
  const errorMessage = "Please enter a valid URL";
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const checkValidity = (e) => {
    const { validity } = e.target;
    const checksPassed = checks.filter((check) => validity[check]).length === 0;
    setIsValid(checksPassed);
    setIsSubmitButtonEnabled(checksPassed && avatarRef.current.value !== "");
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
    setIsValid(true);
    setIsSubmitButtonEnabled(false);
  }, [props.isOpened]);

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"avatar-update"}
      title={"Обновить аватар"}
      submitButtonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      isSubmitButtonEnabled={isSubmitButtonEnabled}
    >
      <div className="popup__field">
        <input
          id="avatar-link-input"
          className={`popup__input popup__input_type_avatar-link ${
            !isValid && "popup__input_type_error"
          }`}
          type="url"
          name="link"
          placeholder="Ссылка на новый аватар"
          ref={avatarRef}
          required
          onChange={checkValidity}
        />
        <span
          className={`avatar-link-input-error popup__input-error ${
            !isValid && "popup__input-error_visible"
          }`}
        >
          {!isValid && errorMessage}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
