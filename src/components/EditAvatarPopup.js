import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef("");
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  const [link, setLink] = React.useState("");
  function handleAvatarLinkChange(e) {
    setLink(e.target.value);
  }
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"avatar-update"}
      title={"Обновить аватар"}
      submitButtonText={"Сохранить"}
      onSubmit={handleSubmit}
      children={
        <>
          <div className="popup__field">
            <input
              id="avatar-link-input"
              className="popup__input popup__input_type_avatar-link"
              type="url"
              name="link"
              placeholder="Ссылка на новый аватар"
              ref={avatarRef}
              value={link}
              onChange={handleAvatarLinkChange}
              required
            />
            <span className="avatar-link-input-error popup__input-error"></span>
          </div>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
