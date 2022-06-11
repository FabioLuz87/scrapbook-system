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
            document.location.href ='message.html';
            return;
        }
    }
    alert("Usuário ou senha inválidos");
}

enterButton.addEventListener('click', login);

const showAlert = (message:string, type: string ):void => {
    const bodyAlert: HTMLDivElement = document.createElement('div');
    bodyAlert.style.zIndex='999';
    bodyAlert.classList.add(`bg-${type}`,'d-flex','flex-column','align-items-center');

    const altertMessage: HTMLParagraphElement = document.createElement('p');
    altertMessage.classList.add('h3','fw-bold','text-center');
    altertMessage.innerText = message;

    bodyAlert.appendChild(altertMessage);

    const buildAlert = document.getElementById('buildAlert') as HTMLDivElement;

    buildAlert.appendChild(bodyAlert);
    buildAlert.classList.remove('d-none');

    setTimeout(()=>{
        buildAlert.innerHTML = '';
        buildAlert.classList.remove('d-none');
    },2000)

} 