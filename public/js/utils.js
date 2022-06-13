"use strict";
const showAlert = (message, type) => {
    const bodyAlert = document.createElement('div');
    bodyAlert.style.zIndex = '999';
    bodyAlert.classList.add(`bg-${type}`, 'd-flex', 'flex-column', 'align-items-center', 'rounded-2', 'col-4', 'offset-4');
    const altertMessage = document.createElement('p');
    altertMessage.classList.add('h3', 'fw-bold', 'text-center');
    altertMessage.innerText = message;
    bodyAlert.appendChild(altertMessage);
    const buildAlert = document.getElementById('buildAlert');
    buildAlert.appendChild(bodyAlert);
    buildAlert.classList.remove('d-none');
    setTimeout(() => {
        buildAlert.innerHTML = '';
        buildAlert.classList.remove('d-none');
    }, 2000);
};
