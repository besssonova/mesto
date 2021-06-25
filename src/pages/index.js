import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/initial-cards.js'
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';

import '../index.css';

const config = {
  
  formSelector: '.form', 
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}


const popupEdit = new PopupWithForm('.popup_type_edit', handleSubmitFormEdit); //change submitForm
const popupPlace = new PopupWithForm('.popup_type_new-card', handleSubmitFormNewCard);//change submitForm
const popupImg = new PopupWithImage('.popup_type_image');

const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupPlaceButton = document.querySelector('.profile__add-button');

const formEditElement = document.querySelector('.form_type_edit');
const formPlaceElement = document.querySelector('.form_type_new-card'); 



const userInfo = new UserInfo({nameProfile: '.profile__name', jobProfile:'.profile__profession'});

const nameInput = formEditElement.elements.name;
const jobInput = formEditElement.elements.profession;



const cardTemplate = '#card-template';

const editFormValidation = new FormValidator(config, formEditElement);
const newCardValidation = new FormValidator(config, formPlaceElement);



const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    cardSection.addItem(renderCard(item));
  }
},
'.elements');


function renderCard(item) {
  const card = new Card(item, cardTemplate, openCardPopup);
  const cardElement = card.createCard();

  return cardElement;
}

function openCardPopup(item) {
  popupImg.open(item);
}

function handleSubmitFormEdit (event, data) {
    event.preventDefault(); 
    userInfo.setUserInfo(data);
    popupEdit.close();
}

 function handleSubmitFormNewCard (event, data) {
   event.preventDefault();
   cardSection.addItem(renderCard(data));
   popupPlace.close();

   newCardValidation.toggleButtonState();
 }

 openPopupEditButton.addEventListener('click', () => {
   const data = userInfo.getUserInfo();
   nameInput.value = data.name;
   jobInput.value = data.job;

   editFormValidation.toggleButtonState();
   popupEdit.open();

 });

 openPopupPlaceButton.addEventListener('click', () => {
   popupPlace.open();
   formPlaceElement.reset();
   newCardValidation.toggleButtonState();
 });


cardSection.renderItems();

popupEdit.setEventListeners();
popupPlace.setEventListeners();
popupImg.setEventListeners();

editFormValidation.enableValidation();
editFormValidation.toggleButtonState();

newCardValidation.enableValidation();
newCardValidation.toggleButtonState();





