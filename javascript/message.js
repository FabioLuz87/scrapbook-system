const currentUser = getInSS('currentUser');
const btnSaveMessage = document.getElementById('save-message');
const description = document.getElementById('description');
const detail = document.getElementById('detail');
let actionEdit = false;
let indexTOEdition = 0;

const getMessagesUser = () => {
    const userList = getInLS('contas');
    const position =  userList.findIndex(curUser => curUser.user === currentUser);
    const objUser = userList[position];
    const messages = objUser.messages; 
    return messages;
}


const loadTable = () => {
    
    const messages = getMessagesUser();
    const tBody = document.getElementById('dinamic-table');
    
    messages.forEach((message, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${message.description}</td>
            <td>${message.detail}</td>
            <td>
                <button type="button" onclick="deleteMessage(${index})" class="button red">Apagar</button>
                <button type="button" onclick="editMessage(${index})" class="button green">Editar</button>
            </td>
        `;
        tBody.appendChild(tr);        
    });
}

loadTable();

const clearTable = () =>{
    const lines = document.querySelectorAll("#dinamic-table> tr");
    lines.forEach((line) => line.parentNode.removeChild(line));
}

const saveMessage = () => {
    if(description.value === '' || detail.value === ''){
        alert("Preencha os campos corretamente!");
        return;
    }

    const userList = getInLS('contas');
    const position =  userList.findIndex(curUser => curUser.user === currentUser);
    const objUser = userList[position];
    const messages = objUser.messages;  
    const message = {description: description.value, detail: detail.value};

    if(actionEdit === true){
        messages[indexTOEdition] = message;
        indexTOEdition = false;
    }else{
        messages.push(message);
    }
    objUser.messages = messages;
    setInLS('contas', userList);
    clearTable();
    loadTable();
    clearInputs();
}

const deleteMessage = (index) => {
    const userList = getInLS('contas');
    const position =  userList.findIndex(curUser => curUser.user === currentUser);
    const objUser = userList[position];
    const messages = objUser.messages;  
    messages.splice(index, 1);
    objUser.messages = messages;
    setInLS('contas', userList);
    clearTable();
    loadTable();
};

const editMessage = (index) => {
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


