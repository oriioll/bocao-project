
const firstLanding = document.getElementById("firstLandingHero");
if(firstLanding) {
 firstLanding.addEventListener("click", () => {
    window.location.href = "introduction/index.html";
  });
}
 

  setTimeout(() => {
    window.location.href = "introduction/index.html";
  }, 3000);



