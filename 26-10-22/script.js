// Array con dati generici

let claArr = ["Claretta", "Ferlito", 25, "Laurea"];
console.log(claArr)

// Eliminazione dell'età
// arr.splice() -> aggiunge e rimuove elementi
claArr.splice(2,1)
console.log(claArr)


// Inseririmeno all'indice realativo all'età (indice 2) la data di nascita
// arr.splice() -> aggiunge e rimuove elementi
claArr.splice(2, 0, "21 Febbraio 1997")
console.log( claArr);


// Modificare il nome e il cognome rendendo la stringa tutta in maiuscolo
// nota: a tal fine dare un occhiata al metodo toUpperCase() su MDN

// nome
claArr.splice(0, 1, claArr[0].toUpperCase() )

// cognome
claArr.splice(1, 1, claArr[1].toUpperCase() )

console.log(claArr)

// Triangolo al contrario

//metodo 1

//for (let i = 0; i<n; i+=1){
//    for (let j = 0; j<n-i; j++){
//        piArr += "#";
//    }
//    piArr += "\n";
//}

//console.log(piArr)

//metodo 2

let str = "#######"

for (let i=7; i>=0; i--) {
    console.log(str.slice(0, i))
}




