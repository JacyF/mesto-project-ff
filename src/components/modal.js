
//                      @todo: Function open modal window

export function openModal(popUp) {

    popUp.classList.add('popup_is-opened');

    // Adding Dom event to close modal window by clicking 'Esc' button
    document.addEventListener('keydown', handleEscClose);
}

//                      @todo: Function close modal window

export function closeModal(popUp) {

    popUp.classList.remove('popup_is-opened');

    // Removing Dom event after closing modal window
    document.removeEventListener('keydown', handleEscClose);
}

//                      @todo: Function close modal window clicking 'Esc' button

function handleEscClose(evt) {

    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
}

//                      @todo: Closing modal window clicking "overlay"

document.addEventListener('click', (evt)=> {

    if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target.closest(".popup_is-opened"))
    }
})

//                      @todo: Closing modal window clicking "close" button

document.querySelectorAll('.popup__close').forEach((button) => {
    
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closeModal(popup);
  });
});

