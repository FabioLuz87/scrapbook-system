const enterButton = document.getElementById('enter-button') as HTMLButtonElement;
const userEmail = document.getElementById('user-email') as HTMLInputElement;
const pass = document.getElementById('pass') as HTMLInputElement;

const login = (e: Event)=> {
    e.preventDefault();

    const usuario: string = userEmail.value;
    const senha:string = pass.value;
    
    const list  = getInLS('contas');

    for(let item of list){
        if(item.user === usuario && item.password === senha){
            saveSS('currentUser', item.user);
            document.location.href ="../message.html";
            return;
        }
    }
    alert("Usuário ou senha inválidos");
}

enterButton.addEventListener('click', login);