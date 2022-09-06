const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDefault (event) {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', preventDefault);
INPUT_CHECKBOX.addEventListener('click', preventDefault);

function justLetterA (event) {
    const key = event.key;
    if (key !== 'a') {
        event.preventDefault();
    }
}

INPUT_TEXT.addEventListener('keypress', justLetterA);
