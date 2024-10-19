// User's Data
const cohortId = 'wff-cohort-24';
const token = '96c74a29-c47a-4f73-b346-3820887b0c3a';

// config data
const config = {

    baseUrl: `https://nomoreparties.co/v1/${cohortId}`,
    headers: {
        authorization: token,
        'Content-Type': 'application/json'
    }
}

// displaying server's response
function responseServer (res) {

    if (res.ok) {
        return res.json()
    }

    return Promise.reject(`Server's Error --> ${res.status}`)
}

//                      @todo: Function user edit avatar picture
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
