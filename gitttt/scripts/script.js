/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/


let champ=document.getElementById("inputEcriture")
let input=champ.value
let score = 0
let nbMotsProposes = listeMots.length
let propo=document.querySelector(".zoneProposition")
let valide=document.getElementById("btnValiderMot")
let win=document.querySelector(".zoneScore span")
let message=document.querySelector(".zoneMessage p") // Ajoute une zone pour les messages
let motIndex = 0 // Pour suivre le mot courant

function afficherMotCourant() {
    propo.innerHTML = `<p>${listeMots[motIndex]}</p>`;
}

function verif() {
    let champ = document.getElementById("inputEcriture");
    let input = champ.value;
    if (input.trim() === "") {
        message.innerText = "Veuillez entrer un mot !";
        message.style.color = "red";
        return;
    } else {
        message.innerText = "";
    }
    if (input === listeMots[motIndex]) {
        score++;
    }
    win.innerText = `${score} / ${nbMotsProposes}`;
    motIndex++;
    champ.value = "";
    if (motIndex < listeMots.length) {
        afficherMotCourant();
    } else {
        propo.innerHTML = "<p>Fin du jeu !</p>";
        message.innerText = "Partie terminée !";
        valide.disabled = true;
    }
}


function lancerJeu() {
    motIndex = 0;
    score = 0;
    valide.disabled = false;
    win.innerText = `${score} / ${nbMotsProposes}`;
    afficherMotCourant();
    message.innerText = "";
}

