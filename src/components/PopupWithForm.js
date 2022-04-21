import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} 
                  ${props.isOpened ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          {props.children}
          <button className="popup__submit-button" type="submit">
            {props.submitButtonText}
          </button>
        </form>
        <button
          onClick={props.onClose}
          className="popup__close"
          type="button"
          aria-label="Закрыть окно редактирования профиля"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
