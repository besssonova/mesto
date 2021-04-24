let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');

let containerInfo = document.querySelector('.profile__info');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');

let formElement = document.querySelector('.form');

let nameInput = document.querySelector('.form__text_type_name');
let jobInput = document.querySelector('.form__text_type_profession');



function togglePopupOpen() {
    popup.classList.toggle('popup__is-closed');
   
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
   
    
};

function togglePopupClose() {
    popup.classList.toggle('popup__is-closed');
    console.log(closed);
}


function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopupClose();
    }   
};


function formSubmitHandler (event) {
    event.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent= jobInput.value;
    
    togglePopupClose();
    
}
openPopupButton.addEventListener('click', togglePopupOpen);

closePopupButton.addEventListener('click', togglePopupClose);

popup.addEventListener('click', handleOverlayClick);

formElement.addEventListener('submit', formSubmitHandler); 