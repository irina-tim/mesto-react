import PopupWithForm from "./PopupWithForm";

function DeletionConfirmationPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      name={"deletion-confirmation"}
      title={"Вы уверены?"}
      submitButtonText={props.isLoading ? "Удаление..." : "Да"}
      onSubmit={handleSubmit}
      isSubmitButtonEnabled={true}
    />
  );
}

export default DeletionConfirmationPopup;
