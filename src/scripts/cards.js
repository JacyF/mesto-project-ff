/*
export const initialCards = [{ name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",},
    {name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",},
    {name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",},
    {name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",},
    {name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",},
    {name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg", }
];
*/ 

export const initialCards = [
  {
    name: "Gojo Style",
    link: "https://c4.wallpaperflare.com/wallpaper/507/287/721/jujutsu-kaisen-gojo-satoru-satoru-gojo-anime-city-hd-wallpaper-preview.jpg",
  },
  {
    name: "Satoru Gojo Red",
    link: "https://c4.wallpaperflare.com/wallpaper/103/5/162/anime-anime-boys-jujutsu-kaisen-satoru-gojo-hd-wallpaper-preview.jpg",
  },
  {
    name: "Satoru Gojo, monochrome",
    link: "https://c4.wallpaperflare.com/wallpaper/444/132/1014/anime-boys-jujutsu-kaisen-monochrome-satoru-gojo-shonen-jump-hd-wallpaper-preview.jpg",
  },
  {
    name: "Satoru Gojo",
    link: "https://c4.wallpaperflare.com/wallpaper/294/228/929/satoru-gojo-jujutsu-kaisen-hd-wallpaper-preview.jpg",
  },
  {
    name: "Satoru Gojo",
    link: "https://c4.wallpaperflare.com/wallpaper/884/100/6/anime-anime-boys-jujutsu-kaisen-satoru-gojo-hd-wallpaper-preview.jpg",
  },
  {
    name: "Satoro Gojo, teenager",
    link: "https://c4.wallpaperflare.com/wallpaper/992/509/107/jujutsu-kaisen-gojo-satoru-hd-wallpaper-preview.jpg",
  }
];

/*                                                    Project continuation                                                    */

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
  const likeCardButton = cardElement.querySelector('.card__like-button')
  likeCardButton.addEventListener('click', () => {
    likeCard(likeCardButton);
  })        
  
  // Zoom Out Image
  cardImage.addEventListener("click", () => {
    zoomOutImage(cardImage);
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



