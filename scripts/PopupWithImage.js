import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(cardElement) {
        const imageOfPopupImg = this._popup.querySelector('.popup__image');
        const captionOfPopupImg = this._popup.querySelector('.popup__caption');

        const imageOfCard = cardElement.querySelector('.element__image');
        const titleOfCard = cardElement.querySelector('.element__title');

        imageOfPopupImg.src = imageOfCard.src;
        imageOfPopupImg.alt = titleOfCard.textContent;
        captionOfPopupImg.textContent = titleOfCard.textContent;

        super.open();
    };
}