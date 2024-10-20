// User's Data
const cohortId = 'wff-cohort-24';
const token = '96c74a29-c47a-4f73-b346-3820887b0c3a';

// Config Data
const config = {

    baseUrl: `https://nomoreparties.co/v1/${cohortId}`,
    headers: {
        authorization: token,
        'Content-Type': 'application/json'
    }
}

// Displaying Server's Response
function responseServer (res) {

    if (res.ok) {
        return res.json()
    }

    return Promise.reject(`Server's Error --> ${res.status}`)
}

//                      @todo: Function User Edit Avatar Picture
export const editUserAvatar = (url) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: url
        })
    })
    .then(responseServer)
}

//                      @todo: Function User Edit Personal Info

// Getting Info
export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
    .then(responseServer)
}

// Updating Info
export const updateUserInfo = (userName, userDesc) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH', 
        headers: config.headers,
        body: JSON.stringify({
            name: userName,
            about: userDesc
        })
    })
    .then(responseServer)
}

//                      @todo: Function Dispaly Initial Cards
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then(responseServer)
}

//                      @todo: Function New Cards

export const addCard = (name,link) => {
    return fetch (`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name,
        link
      })
    })
    .then (responseServer)  
};

//                      @todo: Function Delete Cards
export const deleteCard = (cardId) => {
    return fetch (`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers,
    })
    .then (responseServer)  
};
  
//                      @todo: Function Like Cards

export const likeCard =(cardId)=> {
    return fetch (`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers,
    })
    .then (responseServer) 
};

//                      @todo: Function Unlike Cards

export const unLikeCard =(cardId)=> {
    return fetch (`${config.baseUrl}/cards/likes/${cardId}`,{
      method: 'DELETE',
      headers: config.headers,
    })
    .then (responseServer) 
};