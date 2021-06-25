export const config = {
  
    formSelector: '.form', 
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__text_type_error',
    errorClass: 'form__text-error_active'
}

export const openPopupEditButton = document.querySelector('.profile__edit-button');
export const openPopupPlaceButton = document.querySelector('.profile__add-button');
export const formEditElement = document.querySelector('.form_type_edit');
export const formPlaceElement = document.querySelector('.form_type_new-card'); 
export const nameInput = formEditElement.elements.name;
export const jobInput = formEditElement.elements.profession;
export const cardTemplate = '#card-template';