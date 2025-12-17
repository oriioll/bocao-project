//GLOBAL VARS AND OBJECTS
//Import username from login and register pages and show it
import { user, mail } from "./auth.js";
console.log(user, mail);

//JS OBJECT ARRAY FOR THE BURGERS
const burgers = [
  {
    id: "super-cheese",
    name: "Super cheese",
    desc: "Cheese bruger doble estilo smash con pan brioche",
    price: 11.99,
    stars: 4.8,
    extras: [
      {
        name: "Queso",
        price: 1.99,
      },
      {
        name: "Pepinillos",
        price: 2.99,
      },
    ],
  },
  {
    id: "doble-pollo",
    name: "Doble Pollo",
    desc: "Hamburguesa doble de pollo, tomate y lechuga",
    price: 13.99,
    stars: 4.7,
    extras: [
      {
        name: "Spicy Mayo",
        price: 0.99,
      },
      {
        name: "Bacon",
        price: 3.99,
      },
    ],
  },
  {
    id: "tradicional",
    name: "Tradicional",
    desc: "Hamburguesa de ternera al estilo tradicional",
    price: 10.99,
    stars: 4.5,
    extras: [
      {
        name: "Lechuga",
        price: 0.99,
      },
      {
        name: "Queso",
        price: 1.99,
      },
    ],
  },
  {
    id: "clasica-doble",
    name: "Clásica Doble",
    desc: "Hamburguesa de ternera doble al estilo clásico",
    price: 14.99,
    stars: 4.9,
    extras: [
      {
        name: "Cebolla caramelizada",
        price: 3.99,
      },
      {
        name: "Crema Lotus ®",
        price: 5.99,
      },
    ],
  },
];

//JS ARRAY OBJECT FOR SHOPPING CART WITH LOCALSTORAGE
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
//SELECTED PRODUCT VARIABLES
let pId = "";
let pName = "";
let pDesc = "";
let pPrice = 0;
let pStars = 0;
let pExtras = [];
//PRICE AND EXTRAS AFTER ADDING TO CART
let finalPrice = 0;
let finalExtra1 = "";
let finalExtra2 = "";
//END OF GLOBAL VARS AND OBJECTS
//=============================================================

//ONLY IF YOU ARE ON HOME PAGE
if (window.location.href.includes("home")) {
  document.getElementById("greetUser").innerText = user;

  footerLinks();

  //PRODUCT DISPLAY
  document.querySelector(".popularCarrousel").addEventListener("click", function (event) {
      const clickedArticle = event.target.closest("article");
      if (clickedArticle) {
        const productId = clickedArticle.id;
        console.log("El id del producto clickado es: " + productId);
        //Asing the data of the product chosen to the variables
        pId = productId;
        burgers.forEach((product, i) => {
          //If we are in the product clicked
          if (product.id == productId) {
            pName = product.name;
            pDesc = product.desc;
            pPrice = product.price;
            pStars = product.stars;
            pExtras = product.extras;

            // SAVE ALL IN LOCALSTORAGE
            localStorage.setItem(
              "selectedProduct",
              JSON.stringify({
                id: pId,
                name: pName,
                desc: pDesc,
                price: pPrice,
                stars: pStars,
                extras: pExtras,
              })
            );
          }
        });
        window.location.href = "../product";
      }
    });

    console.log(shoppingCart)
}

//ONLY IF YOU ARE ON THE PRODUCT PAGE
if (window.location.href.includes("product")) {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  let LSId = selectedProduct.id;
  let LSName = selectedProduct.name;
  let LSDesc = selectedProduct.desc;
  let LSPrice = selectedProduct.price;
  let LSStars = selectedProduct.stars;
  let LSExtras = selectedProduct.extras;
  const extraInput1 = document.getElementById("input1");
  const extraInput2 = document.getElementById("input2");
  let newPrice = LSPrice;

  const updatePrice = ()=> {
    newPrice = LSPrice;
    if(extraInput1.checked) {
      newPrice = newPrice + LSExtras[0].price;
    }
    if(extraInput2.checked) {
      newPrice = newPrice + LSExtras[1].price;
    }
    document.getElementById("price").textContent = newPrice + "€";
  }
  //CHANGE EVENT FOR INPUTS
  extraInput1.addEventListener("change", updatePrice);
  extraInput2.addEventListener("change", updatePrice);
  
  document.title = "BOCAO - " + LSName;
  document.getElementById("stars").textContent = LSStars;
  document.getElementById("productName").textContent = LSName;
  document.getElementById("productDesc").textContent = LSDesc;
  document.getElementById("extra1Name").textContent = LSExtras[0].name;
  document.getElementById("extra2Name").textContent = LSExtras[1].name;
  document.getElementById("price").textContent = newPrice + "€";
  document.getElementById("extra1price").textContent = LSExtras[0].price + "€";
  document.getElementById("extra2price").textContent = LSExtras[1].price + "€";


  //TODO: BUTTON ADD TO CART
  document.getElementById('addToCart').addEventListener('click', () => {
    //assing final price to the global price to manage cart
    finalPrice = newPrice;
    //CHECK IF ITEM HAS EXTRA INGREDIENTS WHEN ADDED TO CART
    if(extraInput1.checked) {
      finalExtra1 = LSExtras[0].name;
    }
    if(extraInput2.checked) {
      finalExtra2 = LSExtras[1].name;
    }
    addToCart(LSName, finalExtra1, finalExtra2, finalPrice)
    finalExtra1 = "";
    finalExtra2 = "";
    window.location.href = "../home";
  })
}


//ONLY IF PROFILE WINDOWS
if (window.location.href.includes("profile")) {
  document.getElementById('greetUser').innerText = user;
  document.getElementById('greetMail').innerText = mail;
  footerLinks();
}




function footerLinks() {
  //Get all menu SVGs and when they are cliked, change page to that one
  let homeSvg = document.getElementById("homeSvg");
  let favSvg = document.getElementById("favSvg");
  let shoppingCartSvg = document.getElementById("shoppingCartSvg");
  let menuSvg = document.getElementById("menuSvg");
  let profileSvg = document.getElementById("profileSvg");

  homeSvg.addEventListener("click", () => {
    window.location.href = "../home";
  });

  favSvg.addEventListener("click", () => {
    window.location.href = "../favs";
  });

  shoppingCartSvg.addEventListener("click", () => {
    window.location.href = "../cart";
  });

  profileSvg.addEventListener("click", () => {
    window.location.href = "../profile";
  });

}

function addToCart(name, extra1, extra2, price) {
    //RECORRER ARRAY
    let itemExists = false
    shoppingCart.forEach((object, i) => {
      if(object.name == name && object.extra1 == extra1 && object.extra2 == extra2) {
        itemExists = true;
        object.count += 1;
      }
    })
    if(!itemExists){
      shoppingCart.push({
        name: name, 
        extra1: extra1, 
        extra2: extra2, 
        price: price, 
        count: 1});
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    console.log("ASI ESTA EL CARRITO: ",shoppingCart);
}