// body del documento
const bodyEl = document.querySelector("body");



// Funzione per la creazione delle card

const createCard = (data) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card__el"

    //background-color
    cardEl.classList.add(`bg-${data.types[0].type.name}`)    

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", data.sprites.other.dream_world.front_default)
    cardImg.setAttribute("alt", "img")

    const cardID = document.createElement("h3");
    cardID.textContent = `#${createId(data.id)}`   

    const cardName = document.createElement("h1");
    cardName.textContent = data.name

    const cardType = document.createElement("h3")
    cardType.textContent = `Type: ${data.types[0].type.name}`  
 
    //appendElements
    cardEl.append(cardImg, cardID, cardName, cardType);
    bodyEl.append(cardEl);
}

const urlArray = []
// loading

const loadEl = document.querySelector(".loading")

// Promise.all() -> si completa quando tutte le promise dell'array input
// vengono soddisfatte 
// Metodo per avere le card in maniera ordinata
// Commentato il metodo con fetch utilizzando il numero alla fine dell'url

for(let i=1; i<=151; i++) {
    // fetch(`http://pokeapi.co/api/v2/pokemon/${i}`)
    // .then((res) => res.json())
    // .then((res) => createCard(res))
    urlArray.push(`http://pokeapi.co/api/v2/pokemon/${i}`)

    //in caso di errore
    //.catch((er) => console.log("Error" + er))
    //fine
    //.finally(() => console.log("The End"))
}

//creazione array di promise
let request = urlArray.map((url) => {
    loadEl.classList.add("active")
    return fetch(url)
    .then((res) => res.json()) 
})

//array di promise da eseguire tutte insieme, mappandoli per prendere
//i singoli oggetti e creare le card
Promise.all(request).then((res) => res.map((r) => createCard(r)))
.finally((done) => loadEl.classList.remove("active"))


// Funzione per verificare sia se i valori esistano e, in caso affermativo, generare l'ID
function createId (id) {
    if (!id) return null;
    if (id<10) {return `00${id}`}
    else if (id<100) {return `0${id}`};
    return id
}


