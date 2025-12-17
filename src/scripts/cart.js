//IMPORT USER AND MAIL
import { user, mail } from "./auth.js";
document.getElementById('greetUser').textContent = user

//Restore shopping cart from localStorage
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
console.log(shoppingCart);
//PRICES
//finalPrice without shipping
let finalPrice = 0
const SHIPPING_PRICE = 3.99
//Total import
let totalPrice = 0

//Render all shoppingCart when page is loaded
renderCards(shoppingCart);

//EVENTS FOR ADDING OR DELETING ITEMS
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('addItem')) {
    addOneItem(event);
  } else if(event.target.classList.contains('deleteItem')) {
    deleteOneItem(event);
  }
});








function renderCards(shoppingCart) {
    //EMPTY SECTION EVERY TIME PAGE RELOADS
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = "";
    //GENERATE EVERY CART PRODUCT
    finalPrice = 0;
    shoppingCart.forEach((product, i) => {
        createCartElement(product, productsSection);
        finalPrice = finalPrice + (product.price * product.count);
    });

    //If section is empty, show info message
    if(productsSection.innerHTML == ""){
        productsSection.innerHTML = `
        <p>El carrito esta vacio</p>
        `;
    }

    //Add all prices
    updatePrices();
}

/**
 * Creates an article for each product of the shoppingCart object array with html elements inside with the content of that object from the array
 * @param product Each Object from shoppingCart object array taken from the forEach loop 
 */
function createCartElement(product, productsSection) {
    const productArticle = document.createElement('article');
    let extra1Txt = product.extra1
    let extra2Txt = product.extra2
    if(product.extra1 != "") {
        extra1Txt = "+ " + product.extra1;
    }
    if(product.extra2 != "") {
        extra2Txt = "+ " + product.extra2;
    }
    productArticle.className = "cartProduct"
    productArticle.innerHTML = `
    <div class="cartText">
        <h2>${product.name}</h2>
        <p>${extra1Txt}</p>
        <p>${extra2Txt}</p>
    </div>
    <div class="cartCounter">
        <p id="addItem" class="countModifier addItem">+</p>
        <p>${product.count}<p>
        <p id="deleteItem" class="countModifier deleteItem">-</p>
    </div>
    `;
    productsSection.appendChild(productArticle);
}

function updatePrices(){
    document.getElementById('totalProductPrice').textContent = finalPrice.toFixed(2);
    document.getElementById('shippingPrice').textContent = SHIPPING_PRICE;
    totalPrice = finalPrice + SHIPPING_PRICE
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2) + "€";
    totalPrice = 0;
    finalPrice = 0;
}

function addOneItem(event) {
    const clickedProduct = event.target.closest("article");
    const productName = clickedProduct.querySelector("h2").textContent;

    shoppingCart.forEach(product => {
      if (product.name === productName) {
        product.count++;
      }
    });

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    renderCards(shoppingCart);
    console.log(shoppingCart);
}


function deleteOneItem(event) {
    const clickedProduct = event.target.closest("article");
    const productName = clickedProduct.querySelector("h2").textContent;

    shoppingCart.forEach((product, i) => {
      if (product.name === productName) {
        if(product.count<=1) {
            clickedProduct.remove();
            shoppingCart.splice(i, 1); //Deletes an array element from ${i} (index of selected array element) and deletes 1 element
        }else {
            product.count--;
        }
      }
    });

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    renderCards(shoppingCart);
    console.log(shoppingCart);
}