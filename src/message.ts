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

const exit = () =>{
    saveSS('currentUser', '');
    document.location.href ="index.html"
}

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
            <td class="identificator">${index + 1}</td>
            <td class="description_column">${message.description}</td>
            <td class="detail_column">${message.detail}</td>
            <td class="buttons_column">
                <button type="button" onclick="deleteMessage(${index})" class="button red ">Apagar</button>
                <button type="button" onclick="editMessage(${index})" class="button gray">Editar</button>
            </td>
        `;
        tBody.appendChild(tr);        
    });
}

loadTable();

const clearTable = () =>{
    const lines = document.querySelectorAll("#dinamic-table> tr") as NodeList;
    lines.forEach((line) => line.parentNode?.removeChild(line));
}

const saveMessage = () => {
    if(description.value === '' || detail.value === ''){
        alert("Preencha os campos corretamente!");
        return;
    }

    const userList = getInLS('contas');
    const position =  userList.findIndex((curUser: { user: string | null; }) => curUser.user === currentUser);
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
    // const userList = getInLS('contas');
    // const position =  userList.findIndex(curUser => curUser.user === currentUser);
    // const objUser = userList[position];
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


