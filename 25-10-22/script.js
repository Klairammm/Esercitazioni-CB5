

let userName = prompt("Ciao! Benvenut* nella tua personale calcolatrice! Come ti chiami? 😄");

let firstNum = prompt(userName + ", inserisci qui il primo numero:");
let firstNumP = parseInt(firstNum);

let operation = prompt("Inserisci qui il simbolo matematico dell'operazione che vuoi fare. Esempio: \n + \n - \n * \n / \n %");

let secondNum = prompt("Inserisci qui il secondo numero:");
let secondNumP = parseInt(secondNum);

let somma = firstNumP + secondNumP;
let sottrazione = firstNumP - secondNumP;
let divisione = firstNumP / secondNumP;
let moltiplicazione = firstNumP * secondNumP;
let modulo = firstNumP % secondNumP;


// Calcolatrice con switch

switch (operation) {
    case "+":
        alert("La somma dei tuoi numeri è: " + somma);
        console.log(somma);
        break
    case "-":
        alert("La sottrazione dei tuoi numeri è: " + sottrazione);
        console.log(sottrazione);
        break
    case "/":
        alert("La divisione dei tuoi numeri è: " + divisione);
        console.log(divisione);
        break
    case "*":
        alert("La moltiplicazione dei tuoi numeri è: " + moltiplicazione);
        console.log(moltiplicazione);
        break
    case "&":
        alert("Il modulo dei tuoi numeri è: " + modulo);
        console.log(modulo);
        break
    default:
        alert("C'è un errore nel numero o nell'operatore. Per favore, ricarica la pagina 🤔")
}

// Calcolatrice con if, else if

//if(!isNaN(firstNump)) || (!isNaN(secondNumP){
//    alert("C'è un errore nel numero o nell'operatore. Per favore, ricarica la pagina 🤔");
//}

//if (operation === "+") {
//    alert("La somma dei tuoi numeri è: " + somma);
//    console.log(somma);
//}
//else if (operation === "-") {
//    alert("La sottrazione dei tuoi numeri è: " + sottrazione);
//   console.log(sottrazione);
//}
//else if (operation === "/") {
//    alert("La divisione dei tuoi numeri è: " + divisione);
//    console.log(divisione);
//}
//else if (operation === "*") {
//    alert("La moltiplicazione dei tuoi numeri è: " + moltiplicazione);
//    console.log(moltiplicazione);
//}
//else if (operation === "%") {
//    alert("Il modulo dei tuoi numeri è: " + modulo);
//    console.log(modulo);
//}