import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [cardTitle, setCardTitle] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");

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

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"add-card"}
      title={"Новое место"}
      submitButtonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
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
      }
    />
  );
}

export default AddPlacePopup;
