import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpened]);

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"avatar-update"}
      title={"Обновить аватар"}
      submitButtonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <div className="popup__field">
        <input
          id="avatar-link-input"
          className="popup__input popup__input_type_avatar-link"
          type="url"
          name="link"
          placeholder="Ссылка на новый аватар"
          ref={avatarRef}
          required
        />
        <span className="avatar-link-input-error popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
