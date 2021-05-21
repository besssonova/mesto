const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupMestoButton = document.querySelector('.profile__add-button');

const popupList = Array.from(document.querySelectorAll('.popup'));

const popupEdit = document.querySelector('.popup_type_edit');
const popupMesto = document.querySelector('.popup_type_new-card');
const popupImg = document.querySelector('.popup_type_image');

const imageOfPopupImg = popupImg.querySelector('.popup__image');
const captionOfPopupImg = popupImg.querySelector('.popup__caption');

const closePopupEditButton = document.querySelector('.popup__close-button_type_edit');
const closePopupMestoButton = document.querySelector('.popup__close-button_type_new-card');
const closePopupImgButton = document.querySelector('.popup__close-button_type_image');

const formEditElement = document.querySelector('.form_type_edit');
const formMestoElement = document.querySelector('.form_type_new-card');  

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');

const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_profession');

const mestoInput = document.querySelector('.form__text_type_mesto-name');
const linkInput = document.querySelector('.form__text_type_mesto-link');

const cardContainer = document.querySelector('.elements');
const newCardTemplate = document.querySelector('#card-template');

  function inputValueFormEdit () {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

  function valueDataProfile() {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent= jobInput.value;
}

  function inputValueFormMesto () {
    linkInput.value = '';
    mestoInput.value = '';
}

  function getCard (link, name) {
    const newCard = newCardTemplate.content.querySelector('.element').cloneNode(true);
    const newCardImage = newCard.querySelector('.element__image');
    const newCardCaption = newCard.querySelector('.element__title');

    newCardImage.src = link;
    newCardImage.alt = name;

    newCardCaption.textContent = name;

    const like = newCard.querySelector('.element__heart');

    like.addEventListener('click', function () {
          like.classList.toggle('element__heart_active');
        });
    const trashButton = newCard.querySelector('.element__trash-can');
      
    trashButton.addEventListener('click', function () {
          trashButton.closest('.element').remove();
    });

    const openPopupImageButton = newCard.querySelector('.element__image');

    openPopupImageButton.addEventListener('click', function () {
        openPopup (popupImg);
        imageOfPopupImg.src = link;
        imageOfPopupImg.alt = name;
        captionOfPopupImg.textContent = name;
    });

    return newCard;

  }

  initialCards.forEach((function(element) {
    const newCard = getCard(element.link, element.name);
    cardContainer.append(newCard);

 }));

function openPopup (popup) {
    popup.classList.remove('popup_is-closed');
    document.addEventListener('keydown', (event) => handleEscClick(event, popup));
}

function closePopup (popup) {
    popup.classList.add('popup_is-closed');
    document.removeEventListener('keydown', (event) => handleEscClick(event, popup));
    
}

function openPopupEdit () {
    openPopup(popupEdit);
    inputValueFormEdit ();
    popupEdit.querySelector('.form__submit-button').classList.remove('form__submit-button_disabled');
    popupEdit.querySelector('.form__submit-button').disabled = false;
  
}

function openPopupMesto () {
  openPopup(popupMesto);
  popupMesto.querySelector('.form__submit-button').classList.add('form__submit-button_disabled');
  popupMesto.querySelector('.form__submit-button').disabled = true;

}

function openPopupImg () {
    openPopup(popupImg);
    inputValueFormMesto ();
}

function closePopupMesto (config) {
    closePopup(popupMesto);
    inputValueFormMesto();
}

function handleSubmitFormEdit (event) {
    event.preventDefault(); 
    valueDataProfile();
    closePopup (popupEdit);
}

 function handleSubmitFormNewCard (event) {
   event.preventDefault();
   const newCard = getCard(linkInput.value, mestoInput.value);
   cardContainer.prepend(newCard);
   closePopup(popupMesto);
   inputValueFormMesto ();

 }

function handleOverlayClick(event, popup) { 

  const inputList = Array.from(popup.querySelectorAll('.form__text'));

    if (event.target === event.currentTarget) { 
        closePopup(popup); 

        inputList.forEach((inputElement) => {
          inputElement.value = '';
        })

    }    

    
}; 



function handleEscClick(event, popup) {
    if (event.key === 'Escape') {
      closePopup(popup);
    }

}
 

popupList.forEach((popupElement) => {
   popupElement.addEventListener('click', (event) => handleOverlayClick(event, popupElement));
   
});


openPopupEditButton.addEventListener('click', openPopupEdit);

openPopupMestoButton.addEventListener('click', openPopupMesto);

closePopupEditButton.addEventListener('click', () => closePopup(popupEdit));

closePopupMestoButton.addEventListener('click', closePopupMesto);

closePopupImgButton.addEventListener('click', () => closePopup(popupImg));

formEditElement.addEventListener('submit', handleSubmitFormEdit); 

formMestoElement.addEventListener('submit', handleSubmitFormNewCard); 

const config = {
  formSelector: '.form', 
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}

enableValidation(config);

