import React from "react";
function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup-photo-view 
        ${Object.keys(card).length > 0 && "popup_opened"}`}
    >
      <div className="popup-photo-view__container">
        <img
          className="popup-photo-view__image"
          src={card.link}
          alt={card.name}
        />
        <h2 className="popup-photo-view__title">{card.name}</h2>
        <button
          onClick={onClose}
          style={{
            display: Object.keys(card).length ? "inline-block" : "none",
          }}
          className="popup__close popup-photo-view__close-button"
          type="button"
          aria-label="Закрыть окно просмотра фотографии"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
