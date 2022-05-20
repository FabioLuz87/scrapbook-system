const createButton = document.getElementById('create-button');

const createEmail = document.getElementById('create-email');
const createPass = document.getElementById('create-pass');
const confirmPass = document.getElementById('confirm-pass');

const createAccount = (e) => {
    e.preventDefault();

    const usuario = createEmail.value;
    const senha = createPass.value;
    const confirmacaoSenha = confirmPass.value;
    
    if(isEmpty(usuario) === true){
        alert('Preencha o campo da maneira correto');
        return;
    }
    
    if(isEmpty(senha) === true){
        alert('Preencha o campo da maneira correto');
        return;
    }

    if(isEmpty(confirmacaoSenha) === true){
        alert('Preencha o campo da maneira correto');
        return;
    }

    if(isEqual(senha, confirmacaoSenha) === false){
        alert('As senhas não coincidem');
        return;
    }

    //trata os dados da funcao
    const account = {user: usuario, password: senha, messages: []};

    saveLS('contas', account)
    
    console.log(getInLS('contas'));

    saveSS('currentUser', usuario);
    document.location.href ="../message.html";

    
}

const  isEmpty = (comparator) => {
    if(comparator === ""){
        return true;
    }   
    return false;
}
const isThereInLS = () => {};

const isEqual = (comparator1, comparator2) => {
    if(comparator1 === comparator2){
        return true;
    }
    return false;
};

createButton.addEventListener('click', createAccount);

