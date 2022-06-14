
const setInLS = (key:string, account: string) => localStorage.setItem(key, JSON.stringify(account));
   
const getInLS = (key: string) => JSON.parse(localStorage.getItem(key) as string) ?? [];
   
const saveLS = (key: string, item: string) => {
    const list = getInLS(key);
    list.push(item);
    setInLS(key, list);
}
    
const setInSS = (key: string, account: any) => sessionStorage.setItem(key, JSON.stringify(account));

const getInSS = (key: any) =>  JSON.parse(sessionStorage.getItem(key) as string) ?? '';

const saveSS = (key: string, item: any) => sessionStorage.setItem(key, JSON.stringify(item));

const clearSS = () => sessionStorage.clear();
      
   