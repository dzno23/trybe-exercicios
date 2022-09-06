const btnSubmitForm = document.getElementById('btn-submit-form');
const permissionUsePhoto = document.getElementById('permission-use-photo');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');

function preventDefault(event) {
    event.preventDefault();
}
btnSubmitForm.addEventListener('click', preventDefault);

function verifyPermissionUsePhoto () {
    if (permissionUsePhoto.checked === true) {
        btnSubmitForm.removeAttribute('disabled');
    } else {
        btnSubmitForm.setAttribute('disabled', true);
    }
}
permissionUsePhoto.addEventListener('click', verifyPermissionUsePhoto);