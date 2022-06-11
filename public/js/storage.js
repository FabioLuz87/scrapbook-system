"use strict";
const setInLS = (key, account) => {
    localStorage.setItem(key, JSON.stringify(account));
};
const getInLS = (key) => {
    var _a;
    return (_a = JSON.parse(localStorage.getItem(key))) !== null && _a !== void 0 ? _a : [];
};
const saveLS = (key, item) => {
    const list = getInLS(key);
    list.push(item);
    setInLS(key, list);
};
const setInSS = (key, account) => {
    sessionStorage.setItem(key, JSON.stringify(account));
};
const getInSS = (key) => {
    var _a;
    return (_a = JSON.parse(sessionStorage.getItem(key))) !== null && _a !== void 0 ? _a : '';
};
const saveSS = (key, item) => {
    sessionStorage.setItem(key, JSON.stringify(item));
};
