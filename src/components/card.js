//                      @todo: Function to create cards

// Gettinng acess to template from HTML code
const cardTemplate = document.querySelector("#card-template").content;

export function createCard(card, deleteCard, likeCard, zoomOutImage) {

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

  /*                  Adding event to the Buttons                  */

  // Delete button
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  // Like button
  const likeCardButton = cardElement.querySelector('.card__like-button');
  likeCardButton.addEventListener('click', () => {
    likeCard(likeCardButton);
  })        
  
  // Zoom Out Image
  cardImage.addEventListener("click", () => {
    zoomOutImage(card);
  });

  return cardElement;
}

//                      @todo: Function to delete cards

export function deleteCard(card) {
  card.remove();
}

//                      @todo: Function to like cards

export function likeCard (like) {
  like.classList.toggle("card__like-button_is-active");
}