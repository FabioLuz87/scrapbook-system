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
            document.location.href = "../message.html";
            return;
        }
    }
    alert("Usuário ou senha inválidos");
};
enterButton.addEventListener('click', login);
