//Import username from login and register pages and show it
import {user} from "./auth.js";
console.log(user);

document.getElementById("greetUser").innerText = user;

//Get all menu SVGs and when they are cliked, change page to that one
var homeSvg = document.getElementById('homeSvg');
var favSvg = document.getElementById('favSvg');
var shoppingCartSvg = document.getElementById('shoppingCartSvg');
var menuSvg = document.getElementById('menuSvg');
var profileSvg = document.getElementById('profileSvg');

homeSvg.addEventListener('click', ()=>{
    window.location.href = "../home";
})

favSvg.addEventListener('click', ()=>{
    window.location.href = "../favs";
})

shoppingCartSvg.addEventListener('click', ()=>{
    window.location.href = "../cart";
})

profileSvg.addEventListener('click', ()=>{
    window.location.href = "../profile";
})


