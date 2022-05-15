function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} 
                  ${props.isOpened && "popup_opened"}`}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            className={`popup__submit-button ${
              !props.isSubmitButtonEnabled
                ? "popup__submit-button_disabled"
                : ""
            }`}
            type="submit"
            disabled={!props.isSubmitButtonEnabled}
          >
            {props.submitButtonText}
          </button>
        </form>
        <button
          onClick={props.onClose}
          className="popup__close"
          type="button"
          aria-label="Закрыть окно"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
