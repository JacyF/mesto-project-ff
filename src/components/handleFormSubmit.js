
// Importing from index.js
import { placesList } from "..";
import { zoomOutImage } from "..";
import { nameInput, jobInput } from "..";
import { oldInputName, oldInputDesc } from "..";
import { newCardTitle, newCardUrl } from "..";
import {popUpTypeEdit, popUpNewCard} from "..";

// Importing from modal.js
import { closeModal } from "./modal";

// Importing from card.js
import { createCard, deleteCard, likeCard} from "../components/card";


//                      @todo: Function to Edit profile

export function handleEditProfileFormSubmit(evt) {

    // Stoping auto refresh page
    evt.preventDefault(); 

    // Getting input values
    oldInputName.textContent = nameInput.value;
    oldInputDesc.textContent = jobInput.value;

    // Closing popup
    closeModal(popUpTypeEdit);
}

//                      @todo: Function to Add card

export function handleAddCardFormSubmit(evt) {
    
    // Stoping auto refresh page
    evt.preventDefault();

    // Getting input user values   
    const newCardTitleValue = newCardTitle.value;
    const newCardUrlValue = newCardUrl.value;

    // New card object
    const newCards = {name: newCardTitleValue, link: newCardUrlValue};

    // Adding new card to Dom
    placesList.prepend(createCard(newCards, deleteCard, likeCard, zoomOutImage));

    // Closing popup
    closeModal(popUpNewCard);
}