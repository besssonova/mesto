 export class Card {
  
    constructor(data, cardSelector, handleCardPopup) {
      this._link = data.link;
      this._name = data.name;
      this._handleCardPopup = handleCardPopup;
      this._cardSelector = cardSelector;
      
    }

    _getCardTemplate = () => {
        const cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardTemplate;

    }
  
    _like = (evt) => {
        evt.target.classList.toggle('element__heart_active');
      
    }

    _deleteCard () {
        this._card.remove();
        this._card = null;
    }

    _addEventListeners = () => {
        this._card.querySelector('.element__heart').addEventListener('click', (evt) => {this._like(evt)} );
        this._card.querySelector('.element__image').addEventListener('click', () => {this._handleCardPopup(this._name, this._link)});
        this._card.querySelector('.element__trash-can').addEventListener('click', () => {this._deleteCard()});
    }

    createCard = () => {
        this._card = this._getCardTemplate();
        this._image = this._card.querySelector('.element__image');
        this._imageTitle = this._card.querySelector('.element__title');

        this._image.src = this._link;
        this._image.alt = this._name;
        this._imageTitle.textContent = this._name;
        this._addEventListeners();
        return this._card;
    }

  
  }



