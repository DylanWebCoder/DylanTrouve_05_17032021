const urlProduct = 'http://localhost:3000/api/teddies';
let mainContainer = document.getElementById("container");
fetch(urlProduct)
.then(response => response.json())
.then(json => {
  json.forEach(element => {
    let newCardContent = document.createElement("div");
    
    mainContainer.appendChild(newCardContent);
    newCardContent.classList.add("card-content");

    let newImage = document.createElement("img");
    newCardContent.appendChild(newImage);
    newImage.src = `${element.imageUrl}`;
    
    let newContentBot = document.createElement("div");
    newCardContent.appendChild(newContentBot);
    newContentBot.classList.add("card-content-bot");

    let titleTeddie = document.createElement("h3");
    newContentBot.appendChild(titleTeddie);
    titleTeddie.textContent = `${element.name}` ;

    let priceTeddie = document.createElement("p");
    newContentBot.appendChild(priceTeddie);
    priceTeddie.textContent = `${element.price}` + " €"; 

    let infoTeddie = document.createElement("a");
    newContentBot.appendChild(infoTeddie);
    infoTeddie.classList.add("btn-oneproduct")
    infoTeddie.id = "btn-perso";
    infoTeddie.href = "product.html?ID=" + `${element._id}`;
    infoTeddie.textContent = "Personnalisez votre " + `${element.name}`; 
})
}).catch(error => {
  const message = document.createElement("p")
  message.textContent = "Une erreur s'est produite..."
  mainContainer.appendChild(message);
}





)
