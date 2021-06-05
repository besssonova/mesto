export class FormValidator {
    // constructor(config, form) {
    //     this._config = config;
    //     this._form = form;
    
    // }

    // _showInputError = (inputElement, errorMessage) => {
    //     const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    //     inputElement.classList.add(this._config.inputErrorClass);
       
    //     errorElement.textContent = errorMessage;
    //     errorElement.classList.add(this._config.errorClass);
    // }

    // _hideInputError = (inputElement) => {
    //     const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    //     inputElement.classList.remove(this._config.inputErrorClass);
       
    //     errorElement.classList.remove(this._config.errorClass); 
    //     errorElement.textContent = '';   
    // }

    // _checkInputValidity = (inputElement) => {
    //     if (!inputElement.validity.valid) {
    //         this._showInputError(inputElement, inputElement.validationMessage);
    //     } else {
    //         this._hideInputError(inputElement);
    //     }
    // }

    // _hideSubmitButton = () => {
    //     this._buttonElement.classList.add(this._config._inactiveButtonClass);
    // }

    // _showSubmitButton = () => {
    //     this._buttonElement.classList.remove(this._config._inactiveButtonClass);
    // }


    // toggleButtonState () {
    //     if (this._hasInvalidInput()) {
    //         this._hideSubmitButton();
    //         this._buttonElement.disabled = true;
    //     } else {
    //         this._showSubmitButton();
    //         this._buttonElement.disabled = false;
    //     }

    // }

    // _hasInvalidInput = () => {
    //   return this._inputList.some(function(inputElement) {
    //     return !inputElement.validity.valid;
    //     });
    // }

    // _setEventListeners () {

    //     this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    //     this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);

    //     this.toggleButtonState();

    //     this._inputList.forEach((inputElement) => {

    //         ​inputElement.addEventListener('input', () => {

    //         ​this._checkInputValidity(inputElement);
    //         this.toggleButtonState();
    //         });
    //     });

        
    // }

    // enableValidation = () => {
    //     // const config = this._config;
    //     // const form = this._form;

    //     this._form.addEventListener('submit', (event) => {
    //         event.preventDefault();
    //      });

    //     this._setEventListeners();
    // }
}




