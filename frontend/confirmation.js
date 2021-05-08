let getBackForm = JSON.parse(sessionStorage.getItem('formulaire'));
let getBackPrice = sessionStorage.getItem('orderPrice');
let getBackOrderId = sessionStorage.getItem('orderBack');


let sectionCommandOk = document.getElementById('commandOk-container');

let divCommandOk = document.createElement('div');
divCommandOk.classList.add("text-container");

let textNamePrice = document.createElement('p');
textNamePrice.textContent = "Merci " + getBackForm.firstName + " pour votre commande de " + getBackPrice + "€.";

let textOrderId = document.createElement('p');
textOrderId.textContent = "Votre numéro de commande est : " + getBackOrderId;

sectionCommandOk.appendChild(divCommandOk);
divCommandOk.appendChild(textNamePrice);
divCommandOk.appendChild(textOrderId);

sessionStorage.clear();


