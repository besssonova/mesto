function showInputError (formElement, inputElement,config) {
   const {inputErrorClass, errorClass } = config;

   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
   inputElement.classList.add(inputErrorClass);
  
   errorElement.textContent = inputElement.validationMessage;
   errorElement.classList.add(errorClass);
}

function hideInputError(formElement, inputElement, config) {
    const {inputErrorClass, errorClass } = config;

    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement, config) {
    
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
}

function hideSubmitButton(buttonElement, config) {
    const {inactiveButtonClass} = config;
    buttonElement.classList.add(inactiveButtonClass);

}

function showSubmitButton(buttonElement, config) {
    const {inactiveButtonClass} = config;
    buttonElement.classList.remove(inactiveButtonClass);

}

function hazInvalidInput(inputList) {
   return inputList.some(inputElement => !inputElement.validity.valid);
}

function toggleButtonState (buttonElement, inputList) {
   if (hazInvalidInput(inputList)) {
       hideSubmitButton(buttonElement, config);
       buttonElement.disabled = true;
   } else {
       buttonElement.disabled = false;
       showSubmitButton(buttonElement, config);
   }
}


function setEventListeners(formElement, config) {

  const { inputSelector, submitButtonSelector, ...restConfig } = config;

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
      });

      const inputList = Array.from(formElement.querySelectorAll(inputSelector));

      const buttonElement = formElement.querySelector(submitButtonSelector)

      inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
              checkInputValidity(formElement, inputElement, restConfig);
              toggleButtonState(buttonElement, inputList);
          })
          
      });

      toggleButtonState(buttonElement, inputList);
      
}


function enableValidation({formSelector, ...restConfig}) {
    
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig);
    });
}