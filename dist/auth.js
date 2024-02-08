"use strict";
// let form = document.querySelector(".form") as HTMLInputElement;
let Email = document.querySelector("#Email");
let Password = document.querySelector("#Password");
let Submit = document.querySelector("#login");
Submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (Email.value.trim() == '') {
        console.log('Email can not be empty');
    }
    function error(element, message) {
        element.style.border = '3px red solid';
    }
});
Submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (Password.value.trim() == "") {
        console.log("Password can not be empty");
    }
});
