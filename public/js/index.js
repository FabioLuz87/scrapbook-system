"use strict";
const enterButton = document.getElementById('enter-button');
const userEmail = document.getElementById('user-email');
const pass = document.getElementById('pass');
const link = document.querySelector('a');
const login = (e) => {
    e.preventDefault();
    const usuario = userEmail.value;
    const senha = pass.value;
    const list = getInLS('contas');
    const userObj = list.find((account) => account.user === usuario && account.password === senha);
    if (!userObj) {
        showAlert("Email ou senha inválidos", "danger");
        return;
    }
    //bloquia os botões para o aviso
    enterButton.setAttribute('disabled', '');
    link.removeAttribute('href');
    saveSS('currentUser', userObj.user);
    showAlert("Login efetuado com sucesso...", "success");
    setTimeout(() => {
        document.location.href = 'message.html';
    }, 2000);
};
enterButton.addEventListener('click', login);
