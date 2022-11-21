
// Funzioni operazioni
function somma(num1, num2) {
    return num1+num2
}

function sottrazione(num1, num2) {
    return num1-num2
}

function divisione(num1, num2){
    return num1/num2
}

function moltiplicazione(num1, num2){
    return num1*num2
}

function modulo(num1, num2) {
    return num1%num2
}

const argvs = process.argv 
const argv = argvs.slice(2) 
const operator = argv[0] 
const num1 = parseFloat(argv[1]) 
const num2 = parseFloat(argv[2]) 
 
switch (operator) {
    case "somma":
        console.log(`La somma dei tuoi numeri è: ${somma(num1,num2)}`)
        break
    case "sottrazione":
        if(num1>num2){
        console.log(`La sottrazione dei tuoi numeri è: ${sottrazione(num1,num2)}`)}
        else {
            console.log("Operazione non andata a buon fine: il primo numero è più piccolo del secondo")
        }
        break
    case "divisione":
        if(num1 > num2) {
        console.log(`La divisione dei tuoi numeri è: ${divisione(num1,num2)}`)}
        else {
            console.log("Operazione non andata a buon fine: il primo numero è più piccolo del secondo")
        }
        break
    case "moltiplicazione":
        console.log(`La moltiplicazione dei tuoi numeri è: ${moltiplicazione(num1,num2)}`)
        break
    case "modulo":
        console.log(`Il modulo dei tuoi numeri è: ${modulo(num1,num2)}`)
        break
    default:
        console.log("C'è un errore nel numero o nell'operatore🤔")
}