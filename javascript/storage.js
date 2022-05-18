
const setInLS = (key, account) => {
 localStorage.setItem(key, JSON.stringify(account));
}

const getInLS = (key) => {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

const saveLS = (key, item) => {
    const list = getInLS(key);
    list.push(item);
    setInLS(key, list);
}


const setInSS = (key, account) => {
    sessionStorage.setItem(key, JSON.stringify(account));
}

const getInSS = (key) => {
    return JSON.parse(sessionStorage.getItem(key)) ?? '';
}

const saveSS = (key, item) => {
    sessionStorage.setItem(key, JSON.stringify(item));
}
   
