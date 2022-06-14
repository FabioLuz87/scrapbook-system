const currentUser = getInSS('currentUser') as string | null;
const btnSaveMessage = document.getElementById('save-message') as HTMLButtonElement;
const description = document.getElementById('description') as HTMLInputElement;
const detail = document.getElementById('detail') as HTMLInputElement;
const textUser = document.getElementById('userText') as HTMLParagraphElement;
let actionEdit: boolean = false;
let indexTOEdition: number = 0;

interface Message {
    description: string;
    detail: string;
}

textUser.innerHTML = `Bem vindo(a): ${currentUser}`;

const getMessagesUser = () => {
    const userList = getInLS('contas');
    const position =  userList.findIndex((curUser: { user: string | null; }) => curUser.user === currentUser);
    const objUser = userList[position];
    const messages = objUser.messages; 
    return messages;
}


const loadTable = () => {
    
    const messages: Message[] = getMessagesUser();
    const tBody = document.getElementById('dinamic-table') as HTMLTableElement;
    
    messages.forEach((message, index: number) => {
        const tr = document.createElement('tr');
      

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${message.description}</td>
            <td>${message.detail}</td>
            <td>
                <button type="button" onclick="deleteMessage(${index})" class="btn btn-danger opacity-50 transitionSize">Apagar</button>
                <button type="button" onclick="editMessage(${index})" class="btn btn-secondary transitionSize">Editar</button>
            </td>
        `;
        tBody.appendChild(tr);        
    });
}

const clearTable = () => {
    const lines = document.querySelectorAll("#dinamic-table> tr") as NodeList;
    lines.forEach((line) => line.parentNode?.removeChild(line));
}

const saveMessage =  () => {
    if(!description.value && !detail.value) {
        showAlert("Preencha os campos corretamente!",'danger');
        return;
    }

    const userList = getInLS('contas');
    const position =  userList.findIndex((curUser: { user: string | null}) => curUser.user === currentUser);
    const objUser = userList[position];
    const messages = objUser.messages;  
    const message = {description: description.value, detail: detail.value};

    if(actionEdit === true){
        messages[indexTOEdition] = message;
        actionEdit = false;
    }else{
        messages.push(message);
    }
    objUser.messages = messages;
    setInLS('contas', userList);
    clearTable();
    loadTable();
    clearInputs();
}

const deleteMessage = (index: number) => {
    
    const userList = getInLS('contas');
    const position =  userList.findIndex((curUser: { user: string | null; }) => curUser.user === currentUser);
    const objUser = userList[position];
    const messages = objUser.messages;  
    messages.splice(index, 1);
    objUser.messages = messages;
    setInLS('contas', userList);
    clearTable();
    loadTable();
};

const editMessage = (index: number) => {
    const messages = getMessagesUser();
    description.value = messages[index].description;
    detail.value = messages[index].detail;
    actionEdit = true;
    indexTOEdition = index;
};

const clearInputs = () => {
    description.value = '';
    detail.value = '';
}

btnSaveMessage.addEventListener('click', saveMessage);
loadTable();


