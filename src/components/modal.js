
//                      @todo: Function to open modal window

export function openModal(popUp) {

    popUp.classList.add('popup_is-opened');

    // Adding Dom event to close modal window by clicking 'Esc' button
    document.addEventListener('keydown', handleEscClose);
}

//                      @todo: Function to close modal window

export function closeModal(popUp) {

    popUp.classList.remove('popup_is-opened');

    // Removing Dom event after closing modal window
    document.removeEventListener('keydown', handleEscClose);
}

//                      @todo: Function to close modal window clicking 'Esc' button

function handleEscClose(evt) {

    if (evt.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}