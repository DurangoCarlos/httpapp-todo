import { showModal } from "../render-modal/render-modal";
import "./render-add-Button.css";


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderAddButton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append( fabButton );


//TODO
    fabButton.addEventListener('click', () => {
        showModal();
    });


};