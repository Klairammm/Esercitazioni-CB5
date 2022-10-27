
// Esercizio 1

function calcolatrice(x, y, operation = "z") {

    switch (operation) {
        case "+":
            return x+y;
        case "-":
            return x-y;
        case "/":
            return x/y;
        case "*":
            return x*y
        case "%":
            return x%y
        default:
            alert("C'è un errore nel numero o nell'operatore. Per favore, ricarica la pagina 🤔")
    }
}

console.log(calcolatrice(25,25, "*"))

// Esercizio 2

const character = {
    name: "Furia Buia",
    class: "Strike",
    training: true,
    food: ["pesce", "carne"],
    attack: 15,
    defense: 18,
}

// Metodi esplorati

// accesso agli elementi

// dot-notation
// let nome = character.name;
// oppure
let nome = character["name"];
console.log(nome);
console.log(character.food[1]);

// Ritorna un array delle sole chiavi dell'oggetto
const characterK = Object.keys(character);
console.log(characterK);

// Ritorna un array dei soli valori dell'oggetto
const characterV = Object.values(character);
console.log(characterV);

//oppure insieme con un ciclo for per averli singolarmente
//for (let key in character){
//    console.log(key); //le chiavi
//    console.log(character[key]); //i valori
//}


// assegnare un valore ed una chiave
character.speed = 20;
console.log(character);

// rimuovere chiave e valore
delete character.class;
console.log(character);

// controllare la presenza o meno di un elemento nell'objact
console.log("name" in character);

// bloccare un oggetto in modo che non venga modificato
//Object.freeze(character);
//console.log(character)
//delete character.name;
//console.log(character); // la modifica non sarà apportata

//comparare i valori valori
console.log(Object.is("Furia Bianca", "attack"));



