let productInLocalStorage = JSON.parse(localStorage.getItem("productTeddie"));
const productPanierContainer = document.getElementById('container-panier');

if((productInLocalStorage == 0) || (productInLocalStorage === null)){
    let cartEmpty = document.createElement("p");
    productPanierContainer.appendChild(cartEmpty);
    cartEmpty.classList.add("empty-cart")
    cartEmpty.textContent = "Le panier est vide !";
} else {
    for(i = 0; i < productInLocalStorage.length; i++){
        let panierContainer = document.createElement("div");
        panierContainer.classList.add("item-panier");

        let imageOneTeddie = document.createElement("img");
        imageOneTeddie.src = productInLocalStorage[i].imageTeddie;
        imageOneTeddie.classList.add("image-panier");

        let nameTeddie = document.createElement("span");
        nameTeddie.textContent = productInLocalStorage[i].nomTeddie;

        let priceTeddie = document.createElement("span");
        priceTeddie.textContent = productInLocalStorage[i].prixTeddie + " €";

        let quantiteTeddie = document.createElement("span");
        quantiteTeddie.textContent = "1";

        let btnDelete = document.createElement("button");
        btnDelete.classList.add("btn-delete");
        btnDelete.textContent = "Supprimer";

        panierContainer.appendChild(imageOneTeddie);
        panierContainer.appendChild(nameTeddie);
        panierContainer.appendChild(quantiteTeddie);
        panierContainer.appendChild(priceTeddie);
        panierContainer.appendChild(btnDelete);
        productPanierContainer.appendChild(panierContainer);
    }
// REMOVE BUTTON 

let btnDelete = document.querySelectorAll(".btn-delete");

for (let j = 0; j < btnDelete.length; j++){
    btnDelete[j].addEventListener("click", (event) => {
        event.preventDefault();

        let productDeleted = productInLocalStorage[j];
        productInLocalStorage = productInLocalStorage.filter(el => el !== productDeleted);

        localStorage.setItem("productTeddie", JSON.stringify(productInLocalStorage));
        window.location.href ="panier.html";
    })
}

// TOTAL PANIER 

let priceCartTotal = [];
for (let j = 0; j < productInLocalStorage.length; j++){
    let priceProductCart = productInLocalStorage[j].prixTeddie;
    priceCartTotal.push(priceProductCart);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = priceCartTotal.reduce(reducer,0);

let affichagePanierTotal = document.createElement("div");
affichagePanierTotal.classList.add("cart-price-total");
affichagePanierTotal.textContent = "Total du panier : " + totalPrice + " €";
productPanierContainer.appendChild(affichagePanierTotal);

// FORMULAIRE 

if(totalPrice > 0){
   let formToSendCd = document.createElement("form");
   productPanierContainer.appendChild(formToSendCd);
   formToSendCd.classList.add("formulaire-container");

   let firstNameLabel = document.createElement("label");
   formToSendCd.appendChild(firstNameLabel);
   firstNameLabel.textContent = "Votre Prénom";
   let firstNameInput = document.createElement("input");
   firstNameInput.id = "firstName";
   firstNameInput.setAttribute("type", "text");
   firstNameInput.setAttribute("required", "");
   formToSendCd.appendChild(firstNameInput);

   let lastNameLabel = document.createElement("label");
   formToSendCd.appendChild(lastNameLabel);
   lastNameLabel.textContent = "Votre Nom";
   let lastNameInput = document.createElement("input");
   lastNameInput.id = "lastName";
   lastNameInput.setAttribute("type", "text");
   lastNameInput.setAttribute("required", "");
   formToSendCd.appendChild(lastNameInput);

   let adressLabel = document.createElement("label");
   formToSendCd.appendChild(adressLabel);
   adressLabel.textContent = "Votre Adresse";
   let adressInput = document.createElement("input");
   adressInput.id = "address";
   adressInput.setAttribute("type", "text");
   adressInput.setAttribute("required", "");
   formToSendCd.appendChild(adressInput);

   let cityLabel = document.createElement("label");
   formToSendCd.appendChild(cityLabel);
   cityLabel.textContent = "Votre Ville";
   let cityInput = document.createElement("input");
   cityInput.id = "city";
   cityInput.setAttribute("type", "text");
   cityInput.setAttribute("required", "");
   formToSendCd.appendChild(cityInput);

   let emailLabel = document.createElement("label");
   formToSendCd.appendChild(emailLabel);
   emailLabel.textContent = "Votre Mail";
   let emailInput = document.createElement("input");
   emailInput.id = "email";
   emailInput.setAttribute("type", "mail");
   emailInput.setAttribute("required", "");
   formToSendCd.appendChild(emailInput);

   let validateBtn = document.createElement("input");
   formToSendCd.appendChild(validateBtn);
   validateBtn.id = "validateButton";
   validateBtn.classList.add("btn-validate");
   validateBtn.setAttribute('type','submit');
   validateBtn.setAttribute('value','Validez la commande');

   // Recupération des valeurs du formulaire
    let btnCommandValidate = document.querySelector("#validateButton");

    btnCommandValidate.addEventListener("click", (e) => {
        e.preventDefault();
        const contact = {
            "firstName" : document.querySelector("#firstName").value,
            "lastName" : document.querySelector("#lastName").value,
            "address" : document.querySelector("#address").value,
            "city" : document.querySelector("#city").value,
            "email" : document.querySelector("#email").value
        };

        // Validation du Formulaire
        const regExNameCity = (value) => {
            return /^[A-Za-z]{3,20}$/.test(value)
        }
        const regExAddress = (value) => {
            return /^[A-Za-z0-9]{5,60}$/.test(value)
        }
        const regExEmail = (value) => {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        }

        const firstNameValid = contact.firstName;
        function firstNameCtrl() {
            if (regExNameCity(firstNameValid)){
                return true;
            }else{
                alert("Veuillez bien renseigner votre Prénom");
                return false
            }
        }

        const lastNameValid = contact.lastName;
        function lastNameCtrl() {
            if (regExNameCity(firstNameValid)){
                return true;
            }else{
                alert("Veuillez bien renseigner votre Nom");
                return false
            }
        }

        const addressValid = contact.address;
        function addressCtrl() {
            if (regExAddress(addressValid)){
                return true;
            }else{
                alert("Veuillez bien renseigner votre Adresse");
                return false
            }
        }

        const cityValid = contact.city;
        function cityCtrl() {
            if (regExNameCity(cityValid)){
                return true;
            }else{
                alert("Veuillez bien renseigner votre Ville");
                return false
            }
        }
        
        const emailValid = contact.email;
        function emailCtrl() {
            if (regExEmail(emailValid)){
                return true;
            }else{
                alert("Veuillez bien renseigner votre Email");
                return false
            }
        }

        

        // Fin Validation du Formulaire
        
        if(firstNameCtrl() && lastNameCtrl() && addressCtrl() && cityCtrl() && emailCtrl()){
            let idList = [];
            for(t = 0; t < productInLocalStorage.length; t++){
            idList.push(productInLocalStorage[t].idTeddie)
            }
            let products = idList;
       
            body = {
                contact,
                products
            }
            const requestPost = fetch('http://localhost:3000/api/teddies/order', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  'Content-Type': 'application/json'
                }
            
            });
            
            
            requestPost.then(async(response)=>{
                try {
                    const dataBackOrder = await response.json();
                    // Récupération de orderId + Prix Total
                    sessionStorage.setItem('orderBack', dataBackOrder.orderId);
                    sessionStorage.setItem('orderPrice', totalPrice);
                    sessionStorage.setItem('formulaire', JSON.stringify(contact));
                    // Redirection vers la page de confirmation de commande 
                    window.location = "confirmation.html"
                    // Clear LocalStorage
                    localStorage.clear();
                }catch(e){
                    const message = document.createElement("p")
                    message.textContent = "Une erreur s'est produite..."
                    productPanierContainer.appendChild(message);
                }
            })
            
      
        }else{
            alert("Veuillez bien renseigner tous les champs")
        }

    });
    

};



};



