 export class Card {
  
    constructor(data, handleCardPopup) {
      this._link = data.link;
      this._name = data.name;
      this._handleCardPopup = handleCardPopup;
      
    }

    _getCardTemplate = () => {
        const cardTemplate = document.querySelector('#card-template').content.querySelector('.element').cloneNode(true);
        return cardTemplate;

    }
  
    _like = (evt) => {
        evt.target.classList.toggle('element__heart_active');
      
    }

    _deleteCard () {
        this._card.remove();
    }

    _addEventListeners = () => {
        this._card.querySelector('.element__heart').addEventListener('click', (evt) => {this._like(evt)} );
        this._card.querySelector('.element__image').addEventListener('click', () => {this._handleCardPopup(this._name, this._link)});
        this._card.querySelector('.element__trash-can').addEventListener('click', () => {this._deleteCard()});
    }

    createCard = () => {
        this._card = this._getCardTemplate();
        this._card.querySelector('.element__image').src = this._link;
        this._card.querySelector('.element__image').alt = this._name;
        this._card.querySelector('.element__title').textContent = this._name;
        this._addEventListeners();
        return this._card;
    }

  
  }



