const showAlert = (message: string, type: string): void => {
    const bodyAlert: HTMLDivElement = document.createElement('div');
    bodyAlert.style.zIndex = '999';
    bodyAlert.classList.add(`bg-${type}`, 'd-flex', 'flex-column', 'align-items-center', 'rounded-2', 'col-4', 'offset-4');

    const altertMessage: HTMLParagraphElement = document.createElement('p');
    altertMessage.classList.add('h3', 'fw-bold', 'text-center');
    altertMessage.innerText = message;

    bodyAlert.appendChild(altertMessage);

    const buildAlert = document.getElementById('buildAlert') as HTMLDivElement;

    buildAlert.appendChild(bodyAlert);
    buildAlert.classList.remove('d-none');

    setTimeout(() => {
        buildAlert.innerHTML = '';
        buildAlert.classList.add('d-none');
    }, 2000);
} 


const exit = () => {
    clearSS();
    document.location.href ="index.html"
}
