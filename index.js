let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');

let containerInfo = document.querySelector('.profile__info');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');

let formElement = document.querySelector('.popup__content');

let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_profession');



function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup_is-opened');
   
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
   
    
};

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }   
};

popup.addEventListener('click', handleOverlayClick);


function formSubmitHandler (event) {
    event.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent= jobInput.value;
    
    togglePopup(event);
    
}


formElement.addEventListener('submit', formSubmitHandler); 