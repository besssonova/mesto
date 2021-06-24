export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
        this.close();
        };

    }

    _handleOverlayClose = (event) => {
        if (event.target === event.currentTarget) {
            this.close();
        };
    }

    setEventListeners() {
      this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
          this.close();
      });

      this._popup.addEventListener('click', (event) => {
          this._handleOverlayClose(event);
      });

    }

    close() {
      this._popup.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', this._handleEscClose);

    }

    open() {
      this._popup.classList.add('popup_is-opened');
      document.addEventListener('keydown', this._handleEscClose);

    }


}