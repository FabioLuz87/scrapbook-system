const enterButton = document.getElementById('enter-button') as HTMLButtonElement;
const userEmail = document.getElementById('user-email') as HTMLInputElement;
const pass = document.getElementById('pass') as HTMLInputElement;

const link = document.querySelector('a') as HTMLAnchorElement;

const login = (e: Event)=> {
    e.preventDefault();
    
    const usuario: string = userEmail.value;
    const senha:string = pass.value;
    
    const list  = getInLS('contas');

    const userObj = list.find((account: any) => account.user === usuario && account.password === senha);
    if (!userObj) {
        showAlert("Email ou senha inválidos","danger");
        return;
    }

    //bloquia os botões para o aviso
    enterButton.setAttribute('disabled','');
    link.removeAttribute('href');
    saveSS('currentUser', userObj.user);
    showAlert("Login efetuado com sucesso...","success");
    
    setTimeout(()=>{
        document.location.href ='message.html'; 
    },2000);
}
    
enterButton.addEventListener('click', login);