class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(this._options.baseUrl + "/cards", {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  getUserData() {
    return fetch(this._options.baseUrl + "/users/me", {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  updateUserInfo(userName, userAbout) {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    }).then(this._checkResponse);
  }

  updateUserAvatar(url) {
    return fetch(this._options.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._checkResponse);
  }

  _addLike(cardId) {
    return fetch(this._options.baseUrl + "/cards/" + cardId + "/likes", {
      method: "PUT",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  _removeLike(cardId) {
    return fetch(this._options.baseUrl + "/cards/" + cardId + "/likes", {
      method: "DELETE",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this._addLike(cardId) : this._removeLike(cardId);
  }

  addNewCard(cardName, cardLink) {
    return fetch(this._options.baseUrl + "/cards", {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(this._options.baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
  headers: {
    authorization: "722dbccf-1b7d-4d02-92c2-c3e9bbf9e747",
    "Content-Type": "application/json",
  },
});
