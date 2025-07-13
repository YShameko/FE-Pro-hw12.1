"use strict";

function askURL() {
    do {
        strURL = prompt('Please enter this URL:');
        if (strURL === null) {
            strURL = '';
            break;
        }
    } while(!strURL.trim());
}  

function gotoURL () {
    if (strURL.trim()) { location.href = strURL; }
    else { alert('You should enter the URL first.'); }
}

const askButton = document.querySelector('#btn1');
const gotoButton = document.querySelector('#btn2');
let strURL = '';

if (askButton) {
        askButton.addEventListener('click', askURL);
    } 
if (gotoButton) {
        gotoButton.addEventListener('click', gotoURL);
    }
