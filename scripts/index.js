const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupPlaceButton = document.querySelector('.profile__add-button');

const popupList = Array.from(document.querySelectorAll('.popup'));

const popupEdit = document.querySelector('.popup_type_edit');
const popupPlace = document.querySelector('.popup_type_new-card');
const popupImg = document.querySelector('.popup_type_image');

const imageOfPopupImg = popupImg.querySelector('.popup__image');
const captionOfPopupImg = popupImg.querySelector('.popup__caption');

const closePopupEditButton = document.querySelector('.popup__close-button_type_edit');
const closePopupPlaceButton = document.querySelector('.popup__close-button_type_new-card');
const closePopupImgButton = document.querySelector('.popup__close-button_type_image');

const popupEditSubmitButton = popupEdit.querySelector('.form__submit-button');
const popupPlaceSubmitButton = popupPlace.querySelector('.form__submit-button');

const formEditElement = document.querySelector('.form_type_edit');
const formPlaceElement = document.querySelector('.form_type_new-card');  

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');

const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_profession');

const placeInput = document.querySelector('.form__text_type_mesto-name');
const linkInput = document.querySelector('.form__text_type_mesto-link');

const cardContainer = document.querySelector('.elements');
const newCardTemplate = document.querySelector('#card-template');

  function setInputValuesFormEdit () {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

  function setProfileData() {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent= jobInput.value;
}

  function resetAddForm() {
    linkInput.value = '';
    placeInput.value = '';
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
    popup.classList.toggle('popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
}

function closePopup (popup) {
    popup.classList.add('popup_is-closed');
    popup.classList.toggle('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
    
}

function openPopupEdit () {
    openPopup(popupEdit);
    setInputValuesFormEdit ();
    popupEditSubmitButton.classList.remove('form__submit-button_disabled');
    // popupEdit.querySelector('.form__submit-button').disabled = false;
  
}

function openPopupPlace() {
  openPopup(popupPlace);
  popupPlaceSubmitButton.classList.add('form__submit-button_disabled');
  popupPlaceSubmitButton.disabled = true;

}

function openPopupImg () {
    openPopup(popupImg);
    
}

function closePopupPlace() {
    closePopup(popupPlace);
    resetAddForm();
}

function handleSubmitFormEdit (event) {
    event.preventDefault(); 
    setProfileData();
    closePopup (popupEdit);
}

 function handleSubmitFormNewCard (event) {
   event.preventDefault();
   const newCard = getCard(linkInput.value, placeInput.value);
   cardContainer.prepend(newCard);
   closePopupPlace();

 }

function handleOverlayClick(event, popup) { 

  // unhide if needed to reset data in inputs
  // const inputList = Array.from(popup.querySelectorAll('.form__text'));

    if (event.target === event.currentTarget) { 
        closePopup(popup); 

        // unhide if needed to reset data in inputs
        // inputList.forEach((inputElement) => {
        //   inputElement.value = '';
        // })

    }    

    
}; 

function closeByEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

 

popupList.forEach((popupElement) => {
   popupElement.addEventListener('click', (event) => handleOverlayClick(event, popupElement));
   
});


openPopupEditButton.addEventListener('click', openPopupEdit);

openPopupPlaceButton.addEventListener('click', openPopupPlace);

closePopupEditButton.addEventListener('click', () => closePopup(popupEdit));

closePopupPlaceButton.addEventListener('click', closePopupPlace);

closePopupImgButton.addEventListener('click', () => closePopup(popupImg));

formEditElement.addEventListener('submit', handleSubmitFormEdit); 

formPlaceElement.addEventListener('submit', handleSubmitFormNewCard); 

const config = {
  formSelector: '.form', 
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}

enableValidation(config);

