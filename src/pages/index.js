import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/initial-cards.js'
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';

import '../pages/index.css';

import {
  config,
  openPopupEditButton,
  openPopupPlaceButton,
  formEditElement,
  formPlaceElement,
  nameInput,
  jobInput,
  cardTemplate
} from '../utils/constants.js';

const popupEdit = new PopupWithForm('.popup_type_edit', handleSubmitFormEdit); //change submitForm
const popupPlace = new PopupWithForm('.popup_type_new-card', handleSubmitFormNewCard);//change submitForm
const popupImg = new PopupWithImage('.popup_type_image');

const userInfo = new UserInfo({nameProfile: '.profile__name', jobProfile:'.profile__profession'});

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

function openCardPopup(link, name) {
  popupImg.open(link, name);
}

function handleSubmitFormEdit (event, {name, job}) {
    event.preventDefault(); 
    userInfo.setUserInfo({name, job});
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
   newCardValidation.toggleButtonState();
 });


cardSection.renderItems();

popupEdit.setEventListeners();
popupPlace.setEventListeners();
popupImg.setEventListeners();

editFormValidation.enableValidation();

newCardValidation.enableValidation();





