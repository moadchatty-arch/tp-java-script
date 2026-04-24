let num1 = parseFloat(prompt("Saisir le premier nombre :"));
let num2 = parseFloat(prompt("Saisir le deuxième nombre :"));
console.log("Somme : " + (num1 + num2));
console.log("Différence : " + (num1 - num2));
console.log("Produit : " + (num1 * num2));
if (num2 !== 0) {
    console.log("Quotient : " + (num1 / num2));
} else {
    console.log("Quotient : Impossible de diviser par zéro");
}
