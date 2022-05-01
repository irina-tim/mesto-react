import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
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
  );
}

export default AddPlacePopup;
