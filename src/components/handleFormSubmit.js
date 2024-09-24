
// Importing from index.js
import { placesList } from "..";
import { zoomOutImage } from "..";

// Importing from cards.js
import { createCard, deleteCard, likeCard} from "../scripts/cards";

// Getting acess to Dom elements

// Edit profile nodes
const formElementEditProfile = document.querySelector('.popup__form[name = "edit-profile"]');
export const nameInput = formElementEditProfile.querySelector(".popup__input_type_name");
export const jobInput = formElementEditProfile.querySelector(".popup__input_type_description");
export const oldInputDesc = document.querySelector(".profile__description");
export const oldInputName =document.querySelector(".profile__title");

// Add card nodes
export const formElementAddCard = document.querySelector('.popup__form[name = "new-place"]');
const newCardTitle = formElementAddCard.querySelector(".popup__input_type_card-name");
const newCardUrl = formElementAddCard.querySelector(".popup__input_type_url");


//                      @todo: Function to Edit profile

export function handleEditProfileFormSubmit(evt) {

    // Stoping auto refresh page
    evt.preventDefault(); 

    // Getting input values
    oldInputName.textContent = nameInput.value;
    oldInputDesc.textContent = jobInput.value;
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

    // cleaning input fields
}

// Give the function as callback
formElementEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formElementAddCard.addEventListener('submit', handleAddCardFormSubmit);






  

  