import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(link, name) {
        const imageOfPopupImg = this._popup.querySelector('.popup__image');
        const captionOfPopupImg = this._popup.querySelector('.popup__caption');

        imageOfPopupImg.src = link;
        imageOfPopupImg.alt = name;
        captionOfPopupImg.textContent = name;

        super.open();
    };
}