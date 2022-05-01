import PopupWithForm from "./PopupWithForm";

function DeletionConfirmationPopup(props) {
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"deletion-confirmation"}
      title={"Вы уверены?"}
      submitButtonText={props.isLoading ? "Удаление..." : "Да"}
      onSubmit={props.onSubmit}
    />
  );
}

export default DeletionConfirmationPopup;