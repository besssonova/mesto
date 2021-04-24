let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');

let formElement = document.querySelector('.popup__content');

let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_profession');



function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup_is-opened')

    
   
    // nameInput.Value = nameProfile.textContent;
    // jobInput.Value = jobProfile.textContent;
   
    
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
    // evt.preventDefault(); 

    
    
    nameProfile.textContent = nameInput.Value;
    jobProfile.textContent= jobInput.Value;
    
    
    // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}


formElement.addEventListener('submit', formSubmitHandler); 