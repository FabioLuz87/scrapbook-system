const createButton = document.getElementById('create-button') as HTMLButtonElement;

const createEmail = document.getElementById('create-email')as HTMLInputElement ;
const createPass = document.getElementById('create-pass') as HTMLInputElement;
const confirmPass = document.getElementById('confirm-pass') as HTMLInputElement;

interface User {
    email: string;
    senha: string;
    messages: Array<Message>;
}

const createAccount = (e: Event) => {
    e.preventDefault();

    console.log('Aqui');
    

    const usuario: string = createEmail.value;
    const senha: string = createPass.value;
    const confirmacaoSenha: string = confirmPass.value;
    
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
    const account: any = {user: usuario, password: senha, messages: []};

    saveLS('contas', account)
    
    console.log(getInLS('contas'));

    saveSS('currentUser', usuario);
    document.location.href ="../message.html";

    
}

const  isEmpty = (comparator: string) => {
    if(comparator === ""){
        return true;
    }   
    return false;
}

const isEqual = (comparator1: string, comparator2: string) => {
    if(comparator1 === comparator2){
        return true;
    }
    return false;
};

createButton.addEventListener('click', createAccount);