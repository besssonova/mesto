let openPopupButton = document.querySelector('.profile__edit-button');
let openPopupMestoButton = document.querySelector('.profile__add-button');

let popup = document.querySelector('.popup_type_edit');
let popupMesto = document.querySelector('.popup_type_new-card');
let popupImg = document.querySelector('.popup_type_image');

let closePopupButton = document.querySelector('.popup__close-button');
let closePopupMestoButton = document.querySelector('.popup__close-button_type_new-card');
let closePopupImgButton = document.querySelector('.popup__close-button_type_image');

let formElement = document.querySelector('.form');
let formMestoElement = document.querySelector('.form_type_new-card');  

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');

let nameInput = document.querySelector('.form__text_type_name');
let jobInput = document.querySelector('.form__text_type_profession');

let mestoInput = document.querySelector('.form__text_type_mesto-name');
let linkInput = document.querySelector('.form__text_type_mesto-link');

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


  initialCards.forEach((function(element) {

      const newCard = newCardTemplate.content.querySelector('.element').cloneNode(true);
      newCard.querySelector('.element__image').src = element.link;
      newCard.querySelector('.element__image').alt = element.name;

      newCard.querySelector('.element__title').textContent = element.name;

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
        popupImg.querySelector('.popup__image').src = element.link;
        popupImg.querySelector('.popup__image').alt = element.name;
        popupImg.querySelector('.popup__caption').textContent = element.name;
      });

      closePopupImgButton.addEventListener('click', function() {
        popupImg.classList.add('popup_is-closed');
      });

      cardContainer.append(newCard);

  }));

  function formSubmitNewCard (event) {
    event.preventDefault();

    const newCard = newCardTemplate.content.querySelector('.element').cloneNode(true);
      newCard.querySelector('.element__image').src = linkInput.value;
      newCard.querySelector('.element__image').alt = mestoInput.value;

      newCard.querySelector('.element__title').textContent = mestoInput.value;

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
        popupImg.querySelector('.popup__image').src = newCard.querySelector('.element__image').src ;
        popupImg.querySelector('.popup__image').alt = newCard.querySelector('.element__image').alt;
        popupImg.querySelector('.popup__caption').textContent = newCard.querySelector('.element__image').alt;
      });

      closePopupImgButton.addEventListener('click', function() {
        popupImg.classList.add('popup_is-closed');
      });

     cardContainer.prepend(newCard);
     togglePopupMestoClose();

     linkInput.value = '';
     mestoInput.value = '';
};



function togglePopupOpen() {
    popup.classList.remove('popup_is-closed');
   
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
   
};
    


function togglePopupMestoOpen() {
    popupMesto.classList.remove('popup_is-closed');
   
};

function togglePopupClose() {
    popup.classList.add('popup_is-closed');

   
};

function togglePopupMestoClose() {
    popupMesto.classList.add('popup_is-closed');
    linkInput.value = '';
    mestoInput.value = '';
    
};


// function handleOverlayClick(event) {
//     if (event.target === event.currentTarget) {
//         togglePopupClose();
//     }   
// };


function formSubmitHandler (event) {
    event.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent= jobInput.value;
    
    togglePopupClose();
    
}




openPopupButton.addEventListener('click', togglePopupOpen);

openPopupMestoButton.addEventListener('click', togglePopupMestoOpen);

closePopupButton.addEventListener('click', togglePopupClose);

closePopupMestoButton.addEventListener('click', togglePopupMestoClose);

// popup.addEventListener('click', handleOverlayClick);



formElement.addEventListener('submit', formSubmitHandler); 

formMestoElement.addEventListener('submit', formSubmitNewCard); 



