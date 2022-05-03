import React from "react";

function Input(props) {
  function handleInputChange() {}

  return (
    <input
      id="avatar-link-input"
      className={
        "popup__input popup__input_type_avatar-link" +
        (errorText !== "" && " popup__input_type_error")
      }
      type="url"
      name="link"
      placeholder="Ссылка на новый аватар"
      ref={avatarRef}
      value={link}
      onChange={handleInputChange}
      required
    />
  );
}

export default Input;
