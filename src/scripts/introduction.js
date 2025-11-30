let counter = 1;
function changeDots() {
  const h1 = document.getElementById("introductionh1");
  const normalP = document.getElementById("introductionFirstP");
  const boldP = document.getElementById("introductionBoldP");
  const button = document.getElementById("introductionComenzar");
  const img = document.getElementById("introductionImage");
  counter++;
  if (counter === 1) {
    const dot1 = document.getElementById("introductionDot1");
    dot1.setAttribute("fill", "var(--text-yellow)");
  } else if (counter === 2) {
    const dot2 = document.getElementById("introductionDot2");
    dot2.setAttribute("fill", "var(--text-yellow)");
    h1.innerText = "SIMPLE";
    normalP.innerText = "Abre la app, elige tu bocao";
    boldP.innerText = "y lo disfrutas.";
    img.setAttribute("src", "../src/assets/img/patatas-intro.png");
  } else if (counter === 3) {
    const dot3 = document.getElementById("introductionDot3");
    dot3.setAttribute("fill", "var(--text-yellow)");
    h1.innerText = "¿TE SUMAS?";
    normalP.innerText = "Y todo empieza";
    boldP.innerText = "con un registro.";
    button.style.display = "block";
    img.setAttribute("src", "../src/assets/img/bebida-intro.png");
    img.style.height = "450px";
  } else if (counter === 4) {
    window.location.href = "../login/index.html";
  }
}



  const continueBtn = document.getElementById("introductionContinueButton");
  continueBtn.addEventListener("click", changeDots);

  const introToLogin = document.getElementById("introductionComenzar");
  introToLogin.addEventListener("click", () => {
    window.location.href = "../login/index.html";
  });