import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const urlCheckRegExp =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  const avatarRef = React.useRef("");
  const [link, setLink] = React.useState("");
  const [isSubmitButtonActive, setIsSubmitButtonActive] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleAvatarLinkChange(e) {
    setLink(e.target.value);
    if (e.target.value.match(urlCheckRegExp)) {
      setIsSubmitButtonActive(true);
      setErrorText("");
    } else {
      setIsSubmitButtonActive(false);
      setErrorText("Please enter valid URL");
    }
  }

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"avatar-update"}
      title={"Обновить аватар"}
      submitButtonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      isSubmitButtonActive={isSubmitButtonActive}
      children={
        <>
          <div className="popup__field">
            <input
              id="avatar-link-input"
              className={
                "popup__input popup__input_type_avatar-link" +
                (errorText !== "" && " popup__input_type_error")
              }
              type="url"
              name="link"
              placeholder="Ссылка на новый аватар"
              ref={avatarRef}
              value={link}
              onChange={handleAvatarLinkChange}
              required
            />
            <span
              className={
                "avatar-link-input-error popup__input-error" +
                (errorText !== "" && " popup__input-error_visible")
              }
            >
              {errorText}
            </span>
          </div>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
