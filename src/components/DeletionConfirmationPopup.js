import PopupWithForm from "./PopupWithForm";
import React from "react";

function DeletionConfirmationPopup(props) {
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"deletion-confirmation"}
      title={"Вы уверены?"}
      submitButtonText={"Да"}
      onSubmit={props.onSubmit}
    />
  );
}

export default DeletionConfirmationPopup;
