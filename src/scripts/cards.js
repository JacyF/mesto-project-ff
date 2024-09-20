export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

/*                                                    Project continuation                                                    */


//                      Function create cards

// Gettinng acess to template from HTML code

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки

export function createCard(card, deleteCard) {

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

//                      Function delete cards

// @todo: Функция удаления карточки

export function deleteCard(card) {

  card.remove();
}

//                      Function like cards
