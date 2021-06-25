 export class Card {
  
    constructor({name, link}, cardSelector, handleCardClick) {
      this._link = link;
      this._name = name;
      this._handleCardClick = handleCardClick;
      this._cardSelector = cardSelector;
      
    }

    _getCardTemplate = () => {
        const cardElement= document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;

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
        this._card.querySelector('.element__image').addEventListener('click', () => {this._handleCardClick(this._link, this._name)});
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



