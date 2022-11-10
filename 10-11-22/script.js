
//contenitore del nostro generatore 
const generator = document.getElementById("generator")

//pattern del nostro generatore
const pattern = document.getElementById("pattern")

//richiamiamo il nostro advice
const advice = document.getElementById("advice")

//richiamo il nostro ID advice
const idAdvice = document.getElementById("idAdvice")

//richiamiamo il nostro bottone
const btn = document.getElementById("btn__generator")
//console.log(btn)

// al primo caricamento della mia pagina
console.log("Primo caricamento")

const urlAdvice = "https://api.adviceslip.com/advice"

//mi creo una funzione perchè voglio richiamare queste istruzioni
//ogni volta che premo un bottone
/**
 * Get data from the end point
 * 
 * @param {string} url 
 */
const getAdvice = (url) => {
    // capita che in alcuni casi il browser riconosce che l'url è sempre lo stesso
    // e piuttosto che fare più volte la richiesta ci manda direttamente i dati
    // e quindi al solo url tra parentesi aggiungiamo altre informazioni per la cache
    // sono varie ma in questo caso usiamo no-cache
    loadEl.classList.add("active")
    fetch(url, {cache: "no-cache"})
    .then((res) => res.json())
    //.then((res) => console.log(res))
    //scegliere come rappresentare i valori nella mia card
    .then((res) => {

        advice.innerHTML = res.slip.advice 
        idAdvice.innerText = `#Advice ${ res.slip.id}`
})
    //in caso di errore
    .catch((er) => console.log("Error" + er))
    .finally((done) => loadEl.classList.remove("active"))
}

//aggiungiamo evento al btn
btn.addEventListener("click", () => {getAdvice(urlAdvice)})

//aggiungiamo un loading per il caricamento dell'advice
const loadEl = document.querySelector(".loading")

//richiamiamo la funzione
window.onload = getAdvice(urlAdvice)


//proprietà onload che ci fa capire che ogni volta all'onload 
//(ogni volta che ricarico la pagina) della pagina
//succede la funzione richiamata

//Mettiamo il tutto dentro un contenitore 
generator.append(idAdvice, advice, pattern, btn)

