
// Checking if the fields are valid
const checkInputValidity = (formElement, inputElement, validationConfig) => {

    // Custom Error messages
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }

    // Auto Error messages
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, validationConfig);
    } else {
        hideInputError(formElement, inputElement, validationConfig);
    }
};

// Displaying Error message if not okey
const showInputError = (formElement, inputElement, validationConfig) => {

    // Acessing error element in the Dom
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    // Adding contents and classes 
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(validationConfig.errorClass);
};

// Hiding Error messages if its all okey
const hideInputError = (formElement, inputElement, validationConfig) => {

    // Acessing error element in the Dom
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    // Removing contents and classes 
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
};

// Adding event in each input field and acessed
const setEventListeners = (formElement, validationConfig) => {

    // Acessing all fields in Form
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));

    // Acessing submit button
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    // Looping through in each input field
    inputList.forEach((inputElement) => {

        inputElement.addEventListener('input', () => {

            // Checking the status of input (okey or not)
            checkInputValidity(formElement, inputElement, validationConfig)

            // Function Button states
            toggleButtonState(inputList, buttonElement, validationConfig);
        });
    });
};

// Validation Form
export const enableValidation = (validationConfig) => {

    // Acessing all Forms 
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

    // Looping through in each form
    formList.forEach((formElement) => {

        //Adding event
        setEventListeners(formElement, validationConfig);
    });
};

// Checking if all fields filled are okey
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

// Changing Button State
const toggleButtonState = (inputList, buttonElement, validationConfig) => {

    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
};

// Cleanig popup
export const clearValidation = (formElement, validationConfig) => {

    // Acessing all input field and button element in
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    // Looping through in each field
    inputList.forEach((inputElement) => {

        // Hiding Error
        hideInputError(formElement, inputElement, validationConfig);
        inputElement.setCustomValidity("");
    });
    toggleButtonState(inputList, buttonElement, validationConfig);
};
