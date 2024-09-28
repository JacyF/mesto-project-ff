
// Importing index.js
import './pages/index.css';

// Importing from card.js
import { initialCards } from "./scripts/cards.js";
import { createCard } from './components/card.js';
import { deleteCard } from './components/card.js';
import { likeCard } from './components/card.js';

// Importing from modal.js
import { openModal } from './components/modal.js';
import { closeModal } from './components/modal.js';

// Importing from components.js
import { handleEditProfileFormSubmit } from './components/handleFormSubmit.js';
import { handleAddCardFormSubmit } from './components/handleFormSubmit.js';

// Getting acess to node where to add the new card
export const placesList = document.querySelector(".places__list");

// Profile nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector('.profile__add-button');
export const oldInputName = document.querySelector(".profile__title");
export const oldInputDesc = document.querySelector(".profile__description");

// Form submit buttons
const formElementEditProfile = document.querySelector('.popup__form[name = "edit-profile"]');
const formElementAddCard = document.querySelector('.popup__form[name = "new-place"]');

// Profile edit form elements nodes
export const nameInput = formElementEditProfile.querySelector(".popup__input_type_name");
export const jobInput = formElementEditProfile.querySelector(".popup__input_type_description");

// Profile add card form elements nodes
export const newCardTitle = formElementAddCard.querySelector(".popup__input_type_card-name");
export const newCardUrl = formElementAddCard.querySelector(".popup__input_type_url");

// Image popups node
const popUpTypeImage = document.querySelector(".popup_type_image");
const popUpImage = document.querySelector(".popup__image");
const popUpTitle = document.querySelector(".popup__caption");

// Open popup buttons
export const popUpTypeEdit = document.querySelector(".popup_type_edit");
export const popUpNewCard = document.querySelector('.popup_type_new-card');

// All popups
export const allPopups = document.querySelectorAll(".popup");

//                          Displaying Cards

// looping through cards to display them
initialCards.forEach(card => {

    // adding and displaying the cards
    placesList.append(createCard(card, deleteCard, likeCard, zoomOutImage));
})


/*                                                    Project continuation                                                    */


//                      @todo: Opening modal window clicking "edit" button

profileEditButton.addEventListener("click", () => {

    nameInput.value = oldInputName.textContent;;
    jobInput.value = oldInputDesc.textContent;;

    openModal(popUpTypeEdit);
})

//                      @todo: Opening modal window clicking "+" button

profileAddButton.addEventListener('click', () => {

    openModal(popUpNewCard);

    // cleaning form fields
    formElementAddCard.reset();
});

// Sending form
formElementEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formElementAddCard.addEventListener('submit', handleAddCardFormSubmit);

//                      @todo: Function to open modal window of card image

export function zoomOutImage(image) {

    // Adding content to them
    popUpImage.src = image.link;
    popUpImage.alt = image.name;
    popUpTitle.textContent = image.name;

    openModal(popUpTypeImage);
}

//                      @todo: Close buttons and Popup transition

allPopups.forEach(popupElem => {

    // Adding popup trasintion
    popupElem.classList.add("popup_is-animated");

    // Closing popup by overlay
    popupElem.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closeModal(evt.target.closest(".popup_is-opened"));
        }
    })
});

//                      @todo: Closing modal window clicking "close" button

document.querySelectorAll('.popup__close').forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => {
        closeModal(popup);
    });
});