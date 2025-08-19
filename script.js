// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
let score = 0

// Déclaration de la variable contenant le choix de l'utilisateur
let choix 

 function afficherResultat(  point){
    if (choix === "mots") {
    alert("vous avez "+point+"/"+listeMots.length)

 }else if (choix === "phrases") {
    alert("vous avez "+point+"/"+listePhrases.length)
 }
}

 function choisirPhrasesOuMots()
 {
     choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}
return choix
 }
 function lancerBoucleDeJeu()
 {
    if (choix === "mots") {
    // On parcourt le tableau des mots
    for (let i = 0; i < listeMots.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
   
} else if (choix === "phrases") {
    // On parcourt le tableau des phrases
    for (let i = 0; i < listePhrases.length; i++) {
        // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }

   
}
return score
 }

 function lancerJeu ()
 {
    choisirPhrasesOuMots()
    lancerBoucleDeJeu()
   afficherResultat(score)
      
 }

      //lancerJeu()

//  let test = document.getElementById("yo")
//  console.log(test);
// let i=0
//  let h1list = document.querySelectorAll("h1");
// while (h1list.length > 0)
// {
//     alert(h1list[i].textContent);
//     i++;
// }
 
let bt1=document.getElementById("1");
 
bt1.addEventListener("click",()=>{
    let tes="valide"
    let html=` <p style="color: green; background-color: lightgreen;">
    ${tes}
    </p>
    `
    document.querySelector("div").innerHTML = html;
})

