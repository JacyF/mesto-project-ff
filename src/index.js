
// Importing index.js
import './pages/index.css';

//                          Importing from cards.js

import {initialCards} from "./scripts/cards.js";
import {createCard} from './scripts/cards.js';
import {deleteCard} from './scripts/cards.js';

//                          Importing from modal.js
import {openModal} from './components/modal.js';
import {closeModal} from './components/modal.js';


//                          Displaying Cards

// @todo: DOM узлы
// Getting acess to node where to add the new card
const placesList = document.querySelector(".places__list");

// @todo: Вывести карточки на страницу
// looping through cards to display them
initialCards.forEach(card => {

    // adding and displaying the cards
    placesList.append(createCard(card, deleteCard));
})

/*                                                    Project continuation                                                    */


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
