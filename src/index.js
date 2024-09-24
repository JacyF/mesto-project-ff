
// Importing index.js
import './pages/index.css';

// Importing from cards.js
import {initialCards} from "./scripts/cards.js";
import {createCard} from './scripts/cards.js';
import {deleteCard} from './scripts/cards.js';
import {likeCard} from './scripts/cards.js';

// Importing from modal.js
import {openModal} from './components/modal.js';
import {closeModal} from './components/modal.js';

// Importing from handleFormSubmit.js
import { nameInput, jobInput } from './components/handleFormSubmit.js';
import { oldInputName, oldInputDesc, formElementAddCard } from './components/handleFormSubmit.js';


//                          Displaying Cards

// Getting acess to node where to add the new card
export const placesList = document.querySelector(".places__list");

// looping through cards to display them
initialCards.forEach(card => {

    // adding and displaying the cards
    placesList.append(createCard(card, deleteCard, likeCard, zoomOutImage));
})


/*                                                    Project continuation                                                    */

const popUpTypeEdit = document.querySelector(".popup_type_edit"); 
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector('.profile__add-button');
const popUpNewCard = document.querySelector('.popup_type_new-card');

//                      @todo: Opening modal window by edit button

profileEditButton.addEventListener("click", () => {

    nameInput.value = oldInputName.textContent;;
    jobInput.value = oldInputDesc.textContent;;
    
    openModal(popUpTypeEdit);

    popUpTypeEdit.querySelector(".popup__button").addEventListener('click', () => {
        closeModal(popUpTypeEdit);
    });
})

//                      @todo: Opening modal window clicking "+" button

profileAddButton.addEventListener('click', () => {

    openModal(popUpNewCard);

    // save button
    popUpNewCard.querySelector(".popup__button").addEventListener('click', () => {
        closeModal(popUpNewCard);
    });

    // cleaning form fields
    formElementAddCard.reset();
}); 


//                      @todo: Function to open modal window of card image

export function zoomOutImage(image) {

    // Getting acess to node
    const popUpTypeImage = document.querySelector(".popup_type_image");
    const popUpImage = document.querySelector(".popup__image");
    const popUpTitle = document.querySelector(".popup__caption");

    // Adding content to them
    popUpImage.src = image.src;
    popUpTitle.textContent = image.alt;

    openModal(popUpTypeImage);
}

//                      @todo: Adding popup transition

const allPopupAnimeted = document.querySelectorAll(".popup")
allPopupAnimeted.forEach(popupElem => {
    popupElem.classList.add("popup_is-animated");
});






























/*

//                          Opening pop up window by "+" button 

const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', () => {

    // getting acess to the button "+"
    const popUpNewCard = document.querySelector('.popup_type_new-card')

    openModal(popUpNewCard)
});

//                          Opening pop up window by edit buttonn

const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", () => {

    const popUpEdit = document.querySelector(".popup_type_edit");

    openModal(popUpEdit);
})

//                          Opening pop up image click

// getting all cards and looping through them
document.querySelectorAll(".card__image").forEach(cardImage => {

    // adding event click in each image
    cardImage.addEventListener('click', () => {

        const popUpImage = document.querySelector(".popup__image")
        popUpImage.src = cardImage.src;
        const popUpTypeImage = document.querySelector(".popup_type_image")
        openModal(popUpTypeImage);
    })
})
*/