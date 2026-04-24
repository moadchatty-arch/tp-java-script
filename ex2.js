
const nombreADeviner = Math.floor(Math.random() * 10) + 1;
let tentative;
let score = 0;
let trouve = false;

console.log("--- Jeu de Devinette commencé ! ---");

while (!trouve) {
    tentative = parseInt(prompt("Devinez le nombre (entre 1 et 10) :"));
    score++; 

    if (tentative === nombreADeviner) {
        alert("Bravo ! Vous avez trouvé le nombre : " + nombreADeviner);
        console.log("Félicitations ! Votre score est : " + score);
        trouve = true;
    } else if (tentative < nombreADeviner) {
        alert("Le nombre à deviner est plus grand !");
    } else if (tentative > nombreADeviner) {
        alert("Le nombre à deviner est plus petit !");
    } else {
        alert("Veuillez saisir un nombre valide.");
    }
}
