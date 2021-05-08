let params = (new URL(document.location)).searchParams;
let productId = params.get('ID'); 

const urlProduct = 'http://localhost:3000/api/teddies/' + productId;
let mainContainer = document.getElementById("container");
fetch(urlProduct)
.then(response => response.json())
.then(dataTeddie => { 
if(dataTeddie.name.length > 0){

let titleTeddie = document.createElement("h2");
titleTeddie.textContent = dataTeddie.name;
mainContainer.appendChild(titleTeddie);


let imageOneTeddie = document.createElement("img");
mainContainer.appendChild(imageOneTeddie);
imageOneTeddie.src = dataTeddie.imageUrl;
imageOneTeddie.classList.add("image-product")

let infoContainer = document.createElement("div");
mainContainer.appendChild(infoContainer);
infoContainer.classList.add("info-container");

let priceTeddie = document.createElement("p");
infoContainer.appendChild(priceTeddie);
priceTeddie.textContent = dataTeddie.price + " €";

let infosTeddie = document.createElement("p");
infoContainer.appendChild(infosTeddie);
infosTeddie.textContent = dataTeddie.description;

let selectTeddie = document.createElement("select");
let optionTeddie ;
dataTeddie.colors.forEach(
    color => {
        optionTeddie = document.createElement("option");
        optionTeddie.setAttribute("value", color);
        optionTeddie.textContent = color;
        selectTeddie.appendChild(optionTeddie);
    }
)
infoContainer.appendChild(selectTeddie);

let addToCartBtn = document.createElement("button");
infoContainer.appendChild(addToCartBtn);
let addToCartIcon = document.createElement("i");
addToCartBtn.appendChild(addToCartIcon);
addToCartIcon.classList.add("fas", "fa-cart-plus")
addToCartBtn.id = "addCartBtn";


let clickAddCart = document.getElementById('addCartBtn');
clickAddCart.addEventListener("click", (event)=>{
    event.preventDefault();
    let teddieSelected = {
        idTeddie : dataTeddie._id,
        nomTeddie : dataTeddie.name,
        prixTeddie : dataTeddie.price,
        imageTeddie : dataTeddie.imageUrl
    };
    let productInLocalStorage = JSON.parse(localStorage.getItem("productTeddie"));

    if(productInLocalStorage){
        productInLocalStorage.push(teddieSelected);
        localStorage.setItem("productTeddie", JSON.stringify(productInLocalStorage));
    }else{
        productInLocalStorage = [];
        productInLocalStorage.push(teddieSelected);
        localStorage.setItem("productTeddie", JSON.stringify(productInLocalStorage));
    }
 
})
}
}).catch(error => {
    const message = document.createElement("p")
    message.textContent = "Une erreur s'est produite..."
    mainContainer.appendChild(message);
  })



