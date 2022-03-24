// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function funcaoPrevineDefault(event) {
    if (event.key !== 'a') {
        event.preventDefault();
    }
}

HREF_LINK.addEventListener('click', funcaoPrevineDefault);
INPUT_CHECKBOX.addEventListener('click', funcaoPrevineDefault);
INPUT_TEXT.addEventListener('keypress', funcaoPrevineDefault);
