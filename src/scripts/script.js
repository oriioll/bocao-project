
const firstLanding = document.getElementById("firstLandingHero");
if(firstLanding) {
 firstLanding.addEventListener("click", () => {
    window.location.href = "./introduction";
  });
}


  setTimeout(() => {
    window.location.href = "./introduction";
  }, 3000);



