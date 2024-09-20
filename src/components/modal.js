
/*                                                    Project continuation                                                    */

//                      Function open modal window

export function openModal(popUp) {

    popUp.classList.add('popup_is-opened');
}

//                      Function close modal window

export function closeModal(popUp) {

    popUp.classList.remove('popup_is-opened');
}