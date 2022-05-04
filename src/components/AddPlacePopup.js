import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [cardTitle, setCardTitle] = useState("");
  const [cardLink, setCardLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ title: cardTitle, link: cardLink });
  }

  function handleTitleChange(e) {
    setCardTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setCardLink(e.target.value);
  }

  useEffect(() => {
    setCardTitle("");
    setCardLink("");
  }, [props.isOpened]);

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"add-card"}
      title={"Новое место"}
      submitButtonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
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
            onChange={handleTitleChange}
            value={cardTitle}
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
            onChange={handleLinkChange}
            value={cardLink}
            required
          />
          <span className="image-link-input-error popup__input-error"></span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
