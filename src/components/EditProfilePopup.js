import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
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
  );
}

export default EditProfilePopup;
