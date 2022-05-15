import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [cardTitle, setCardTitle] = useState("");
  const [cardLink, setCardLink] = useState("");
  const titleChecks = ["valueMissing", "tooShort"];
  const linkChecks = ["valueMissing", "typeMismatch"];
  const titleErrorMessage = "Please use at least 2 characters";
  const linkErrorMessage = "Please enter a valid URL";
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isLinkValid, setIsLinkValid] = useState(false);
  const checkValidity = (e) => {
    const { validity } = e.target;

    if (e.target.name === "title") {
      const checksPassed =
        titleChecks.filter((check) => validity[check]).length === 0;
      setIsTitleValid(checksPassed);
    }
    if (e.target.name === "link") {
      const checksPassed =
        linkChecks.filter((check) => validity[check]).length === 0;
      setIsLinkValid(checksPassed);
    }
  };

  useEffect(() => {
    if (isTitleValid && isLinkValid) setIsSubmitButtonEnabled(true);
    else setIsSubmitButtonEnabled(false);
  }, [isTitleValid, isLinkValid]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ title: cardTitle, link: cardLink });
  }

  function handleTitleChange(e) {
    setCardTitle(e.target.value);
    checkValidity(e);
  }

  function handleLinkChange(e) {
    setCardLink(e.target.value);
    checkValidity(e);
  }

  useEffect(() => {
    setCardTitle("");
    setCardLink("");
    setIsTitleValid(false);
    setIsLinkValid(false);
    setIsSubmitButtonEnabled(false);
  }, [props.isOpened]);

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"add-card"}
      title={"Новое место"}
      submitButtonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      isSubmitButtonEnabled={isSubmitButtonEnabled}
    >
      <>
        <div className="popup__field">
          <input
            id="card-title-input"
            className={`popup__input popup__input_type_card-title ${
              !isTitleValid && cardTitle !== "" && "popup__input_type_error"
            }`}
            type="text"
            name="title"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            onChange={handleTitleChange}
            value={cardTitle}
          />
          <span
            className={`card-title-input-error popup__input-error ${
              !isTitleValid && cardTitle !== "" && "popup__input-error_visible"
            }`}
          >
            {!isTitleValid && cardTitle !== "" && titleErrorMessage}
          </span>
        </div>
        <div className="popup__field">
          <input
            id="image-link-input"
            className={`popup__input popup__input_type_image-link ${
              !isLinkValid && cardLink !== "" && "popup__input_type_error"
            }`}
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            onChange={handleLinkChange}
            value={cardLink}
            required
          />
          <span
            className={`image-link-input-error popup__input-error ${
              !isLinkValid && cardLink !== "" && "popup__input-error_visible"
            }`}
          >
            {!isLinkValid && cardLink !== "" && linkErrorMessage}
          </span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
