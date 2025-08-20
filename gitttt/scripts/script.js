// Listes de mots et phrases

// Sélecteurs principaux
const champ = document.getElementById("inputEcriture");
const propo = document.querySelector(".zoneProposition");
const valide = document.getElementById("btnValiderMot");
const win = document.querySelector(".zoneScore span");
const message = document.querySelector(".zoneMessage");
const btnCommencer = document.getElementById("btnCommencer");
const btnRecommencer = document.getElementById("btnRecommencer");

let choix = "";
let motIndex = 0;
let score = 0;
let listeCourante = [];
let nbPropositions = 0;

function choisirListe() {
  // Affiche un modal custom pour le choix
  const modal = document.createElement("div");
  modal.className = "modalChoix";
  modal.innerHTML = `
      <div class="modalContent">
          <h2>Choisis ton mode de jeu</h2>
          <button class="choixBtn" data-choix="mots">Mots</button>
          <button class="choixBtn" data-choix="phrases">Phrases</button>
      </div>
  `;
  document.body.appendChild(modal);
  document.querySelectorAll(".choixBtn").forEach((btn) => {
    btn.onclick = function () {
      choix = this.getAttribute("data-choix");
      if (choix === "mots") {
        listeCourante = listeMots;
      } else {
        listeCourante = listePhrases;
      }
      nbPropositions = listeCourante.length;
      valide.style.display = "none";
      btnCommencer.style.display = "inline-block";
      message.innerText = `Cliquez sur Commencer pour débuter la partie !`;
      propo.innerHTML = "";
      win.innerText = `0 / ${nbPropositions}`;
      document.body.removeChild(modal);
    };
  });
}

function afficherMotCourant() {
  propo.innerHTML = `<p>${listeCourante[motIndex]}</p>`;
}

function verif() {
  let input = champ.value;
  if (input.trim() === "") {
    message.innerText = "Veuillez entrer une réponse !";
    champ.focus();
    message.style.color = "#d9534f";
    return;
  } else {
    message.innerText = "";
  }
  if (input.toLowerCase() === listeCourante[motIndex].toLowerCase()) {
    score++;
    message.innerText = "Bravo, bonne réponse !";
    message.style.color = "#28a745";
  } else {
    message.innerText = "Raté, essaye encore !";
    message.style.color = "#d9534f";
  }
  win.innerText = `${score} / ${nbPropositions}`;
  motIndex++;
  champ.value = "";
  if (motIndex < listeCourante.length) {
    setTimeout(() => {
      message.innerText = "";
      afficherMotCourant();
      champ.focus();
    }, 700);
  } else {
    propo.innerHTML = "<p>Fin du jeu !</p>";
    message.innerText = `Partie terminée ! Score final : ${score} / ${nbPropositions}`;
    message.style.color = "#3a7bd5";
    valide.disabled = true;
    btnRecommencer.style.display = "inline-block";
  }
}

function lancerJeu() {
  valide.style.display = "inline-block";
  motIndex = 0;
  score = 0;
  champ.value = "";
  valide.disabled = false;
  btnRecommencer.style.display = "none";
  win.innerText = `${score} / ${nbPropositions}`;
  afficherMotCourant();
  message.innerText = "";
  champ.focus();
}

btnCommencer.addEventListener("click", () => {
  btnCommencer.style.display = "none";
  lancerJeu();
});

btnRecommencer.addEventListener("click", () => {
  btnRecommencer.style.display = "none";
  btnCommencer.style.display = "none";
  choix = "";
  motIndex = 0;
  score = 0;
  champ.value = "";
  valide.disabled = false;
  choisirListe();
});

valide.addEventListener("click", verif);
champ.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && !valide.disabled) {
    verif();
  }
});

// Initialisation au chargement
btnCommencer.style.display = "none";
btnRecommencer.style.display = "none";
choisirListe();

// Style pour le modal
const styleModal = document.createElement("style");
styleModal.innerHTML = `
.modalChoix {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(58,123,213,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modalContent {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  padding: 32px 24px;
  text-align: center;
}
.modalContent h2 {
  color: #3a7bd5;
  margin-bottom: 18px;
}
.choixBtn {
  background: #3a7bd5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  font-size: 1em;
  margin: 0 10px;
  cursor: pointer;
  transition: background 0.2s;
}
.choixBtn:hover {
  background: #005fa3;
}`;
document.head.appendChild(styleModal);
