// @todo: Темплейт карточки

// Gettinng acess to template from HTML code
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

// Getting acess to node where to add the new card
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(card, deleteCard) {

    // Cloning template to get acess to his content
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    //Getting acess to the img node
    const cardImage = cardElement.querySelector(".card__image");

    //adding content to img node
    cardImage.src = card.link;
    cardImage.alt = card.name;

    // Getting acess to the title node
    const cardTitle = cardElement.querySelector(".card__title");

    // adding content to title
    cardTitle.textContent = card.name;

    // Getting acess to the button delete card
    const cardDeleteButton = cardElement.querySelector(".card__delete-button");

    // adding event to the button
    cardDeleteButton.addEventListener("click", () => {

        deleteCard(cardElement)
    });

    return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(card) {

    card.remove();
}

// @todo: Вывести карточки на страницу

// looping through cards to display them
initialCards.forEach(card => {

    // adding and displaying the cards
    placesList.append(createCard(card, deleteCard));
})
