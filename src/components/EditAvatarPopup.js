import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
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
              placeholder="Ссылка на новый аватар"
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
