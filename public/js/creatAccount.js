"use strict";
const createButton = document.getElementById('create-button');
const createEmail = document.getElementById('create-email');
const createPass = document.getElementById('create-pass');
const confirmPass = document.getElementById('confirm-pass');
const createAccount = (e) => {
    e.preventDefault();
    const usuario = createEmail.value;
    const senha = createPass.value;
    const confirmacaoSenha = confirmPass.value;
    if (!usuario) {
        showAlert('Preencha o campo da maneira correta!', 'danger');
        return;
    }
    if (!senha) {
        showAlert('Preencha o campo da maneira correta!', 'danger');
        return;
    }
    if (!confirmacaoSenha) {
        showAlert('Preencha o campo da maneira correta!', 'danger');
        return;
    }
    if (senha !== confirmacaoSenha) {
        showAlert('As senhas não coincidem!', 'danger');
        return;
    }
    const list = getInLS('contas');
    const userObj = list.find((account) => account.user === usuario);
    if (userObj) {
        showAlert('Já existe usuário com este email, escolha outro por favor.', 'danger');
        return;
    }
    //trata os dados da funcao
    const account = { user: usuario, password: senha, messages: [] };
    saveLS('contas', account);
    saveSS('currentUser', usuario);
    //bloquia o botão para o tempo do aviso
    createButton.setAttribute('disabled', '');
    showAlert('O usuário foi criado com sucesso', 'success');
    setTimeout(() => {
        document.location.href = "message.html";
    }, 1000);
};
createButton.addEventListener('click', createAccount);
