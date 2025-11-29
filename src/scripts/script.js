document.getElementById("firstLandingHero").addEventListener("click", () => {
  window.location.href = "introduction/index.html";
});
/*
//Si estas en la pagina principal, a los 5 segundos te redirige a la introduccion
if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
  setTimeout(() => {
    window.location.href = "introduction/index.html";
  }, 5000);
}
*/