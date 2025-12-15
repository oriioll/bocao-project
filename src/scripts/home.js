//Import username from login and register pages and show it
import { user } from "./auth.js";
console.log(user);

//JS OBJECT FOR THE BURGERS
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
        precio: 1.99,
      },
      {
        name: "Pepinillos",
        precio: 2.99,
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
        precio: 0.99,
      },
      {
        name: "Bacon",
        precio: 3.99,
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
        precio: 0.99,
      },
      {
        name: "Queso",
        precio: 1.99,
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
        precio: 3.99,
      },
      {
        name: "Crema Lotus ®",
        precio: 5.99,
      },
    ],
  },
];

//SELECTED PRODUCT VARIABLES
let pId = "";
let pName = "";
let pDesc = "";
let pPrice = 0;
let pStars = 0;
let pExtras = [];

//ONLY IF YOU ARE ON HOME PAGE
if (window.location.href.includes("home")) {
  document.getElementById("greetUser").innerText = user;

  //Get all menu SVGs and when they are cliked, change page to that one
  var homeSvg = document.getElementById("homeSvg");
  var favSvg = document.getElementById("favSvg");
  var shoppingCartSvg = document.getElementById("shoppingCartSvg");
  var menuSvg = document.getElementById("menuSvg");
  var profileSvg = document.getElementById("profileSvg");

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
          }
        });
      }
    });
}
