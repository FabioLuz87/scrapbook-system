"use strict";
const enterButton = document.getElementById('enter-button');
const userEmail = document.getElementById('user-email');
const pass = document.getElementById('pass');
const login = (e) => {
    e.preventDefault();
    const usuario = userEmail.value;
    const senha = pass.value;
    const list = getInLS('contas');
    for (let item of list) {
        if (item.user === usuario && item.password === senha) {
            saveSS('currentUser', item.user);
            document.location.href = 'message.html';
            return;
        }
    }
    alert("Usuário ou senha inválidos");
};
enterButton.addEventListener('click', login);
const showAlert = (message, type) => {
    const bodyAlert = document.createElement('div');
    bodyAlert.style.zIndex = '999';
    bodyAlert.classList.add(`bg-${type}`, 'd-flex', 'flex-column', 'align-items-center');
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
