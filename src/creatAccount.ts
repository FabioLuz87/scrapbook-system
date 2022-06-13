const createButton = document.getElementById('create-button') as HTMLButtonElement;

const createEmail = document.getElementById('create-email')as HTMLInputElement ;
const createPass = document.getElementById('create-pass') as HTMLInputElement;
const confirmPass = document.getElementById('confirm-pass') as HTMLInputElement;

const createAccount = (e: Event) => {
    e.preventDefault();

    const usuario: string = createEmail.value;
    const senha: string = createPass.value;
    const confirmacaoSenha: string = confirmPass.value;
    
    if(!usuario){
        showAlert('Preencha o campo da maneira correto!', 'danger');
        return;
    }
    
    if(!senha){
        showAlert('Preencha o campo da maneira correto!', 'danger');
        return;
    }

    if(!confirmacaoSenha){
        showAlert('Preencha o campo da maneira correto!', 'danger');
        return;
    }

    if(senha !== confirmacaoSenha){
        showAlert('As senhas não coincidem!', 'danger');
        return;
    }

    //trata os dados da funcao
    const account: any = {user: usuario, password: senha, messages: []};

    saveLS('contas', account);
    saveSS('currentUser', usuario);

    //bloquia o botão para o tempo do aviso
    createButton.setAttribute('disabled','');
    showAlert('O usuário foi criado com sucesso','success')
    setTimeout(()=>{
        document.location.href ="message.html";    
    },1000)
}

createButton.addEventListener('click', createAccount);