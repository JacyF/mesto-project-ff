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

export const getUserEditInfo = (userName, userDesc) => {
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

