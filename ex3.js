
console.log("--- Exercice 1: Calculatrice ---");
let num1 = parseFloat(prompt("Exercice 1: Saisir le premier nombre :"));
let num2 = parseFloat(prompt("Exercice 1: Saisir le deuxième nombre :"));

console.log("Somme : " + (num1 + num2));
console.log("Produit : " + (num1 * num2));
console.log("-----------------------------------");

function jeuDevinette() {
    const nombreADeviner = Math.floor(Math.random() * 10) + 1;
    let tentative;
    let score = 0;
    let trouve = false;

    while (!trouve) {
        tentative = parseInt(prompt("Exercice 2: Devinez le nombre entre 1 et 10 :"));
        score++;
        if (tentative === nombreADeviner) {
            alert("Bravo ! Trouvé en " + score + " tentatives.");
            trouve = true;
        } else if (tentative < nombreADeviner) {
            alert("Plus grand !");
        } else {
            alert("Plus petit !");
        }
    }
}

function lancerQuiz() {
    const QUESTIONS = [
        ["Quelle est la capitale de la France ?", "Paris"],
        ["Quel est le langage de ce TP ?", "JavaScript"],
        ["Est-ce que PHP est un langage client-side ? (Oui/Non)", "Non"]
    ];

    let scoreQuiz = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
        let reponse = prompt(QUESTIONS[i][0]);
        if (reponse && reponse.toLowerCase() === QUESTIONS[i][1].toLowerCase()) {
            alert("Réponse juste !");
            scoreQuiz++;
        } else {
            alert("Réponse fausse. La bonne réponse était : " + QUESTIONS[i][1]);
        }
    }
    alert("Résultat final : Vous avez répondu correctement à " + scoreQuiz + " questions sur " + QUESTIONS.length);
    console.log("Score Quiz : " + scoreQuiz + " / " + QUESTIONS.length);
}
