const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupMestoButton = document.querySelector('.profile__add-button');

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



const initialCards = [ 
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  function inputValueFormEdit () {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
};

  function valueDataProfile() {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent= jobInput.value;
};

  function inputValueFormMesto () {
    linkInput.value = '';
    mestoInput.value = '';
};

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
        popupImg.classList.remove('popup_is-closed');
        imageOfPopupImg.src = link;
        imageOfPopupImg.alt = name;
        captionOfPopupImg.textContent = name;
    });

    return newCard;

  };

  initialCards.forEach((function(element) {
    const newCard = getCard(element.link, element.name);
    cardContainer.append(newCard);

 }));

function openPopup (popup) {
    popup.classList.remove('popup_is-closed');
};

function closePopup (popup) {
    popup.classList.add('popup_is-closed');
};

function openPopupEdit () {
    openPopup(popupEdit);
    inputValueFormEdit ();
};

function openPopupMesto () {
    openPopup(popupMesto);
};

function openPopupImg () {
    openPopup(popupImg);
    inputValueFormMesto ();
};

function closePopupEdit () {
    closePopup(popupEdit);
};

function closePopupMesto () {
    closePopup(popupMesto);
    inputValueFormMesto();
};

function closePopupImg () {
    closePopup(popupImg);
};

function handleSubmitFormEdit (event) {
    event.preventDefault(); 
    valueDataProfile();
    closePopup (popupEdit);
};


 function handleSubmitFormNewCard (event) {
   event.preventDefault();
   const newCard = getCard(linkInput.value, mestoInput.value);
   cardContainer.prepend(newCard);
   closePopup(popupMesto);
   inputValueFormMesto ();

 };

// function handleOverlayClick(event) { 
//     if (event.target === event.currentTarget) { 
//         togglePopupClose(); 
//     }    
// }; 

// popup.addEventListener('click', handleOverlayClick);

openPopupEditButton.addEventListener('click', openPopupEdit);

openPopupMestoButton.addEventListener('click', openPopupMesto);

closePopupEditButton.addEventListener('click', closePopupEdit);

closePopupMestoButton.addEventListener('click', closePopupMesto);

closePopupImgButton.addEventListener('click', closePopupImg);

formEditElement.addEventListener('submit', handleSubmitFormEdit); 

formMestoElement.addEventListener('submit', handleSubmitFormNewCard); 
