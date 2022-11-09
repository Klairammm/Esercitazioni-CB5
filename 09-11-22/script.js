// RECAP ESERCIZIO POKEDEX

// creazione ciclo for

const bodyEl = document.querySelector("body")
const card = document.querySelector("cards")

const createCard = (data) => {
    const cardEl = document.createElement("div");
    const cardCont = document.createElement("div");
    
    const cardImg = document.createElement("img");
    const cardID = document.createElement("h3");
    const cardName = document.createElement("h1");
    const cardType = document.createElement("h3")

    cardEl.className = "card__el"
    cardCont.className = "card__cont"
    cardImg.setAttribute("src", data.sprites.other.dream_world.front_default)
    cardImg.setAttribute("alt", "img")
    cardID.textContent = data.id
    cardName.textContent = data.name
    cardType.textContent = data.types[0].type.name
 
    //appendElements
    cardCont.append(cardImg, cardID, cardName, cardType);
    cardEl.append(cardCont)
    bodyEl.append(cardEl);

    switch (data.types[0].type.name) {
        case "electric":
          cardEl.style = "background-color: #FCF7DE";
          break;
        case "water":
          cardEl.style = "background-color: #DEF3FD";
          break;
        case "ground":
          cardEl.style = "background-color: #f4e7da";
          break;
        case "rock":
          cardEl.style = "background-color: #d5d5d4";
          break;
        case "fairy":
          cardEl.style = "background-color: #fceaff";
          break;
        case "poison":
          cardEl.style = "background-color: #98d7a5";
          break;
        case "bug":
          cardEl.style = "background-color: #f8d5a3";
          break;
        case "dragon":
          cardEl.style = "background-color: #97b3e";
          break;
        case "psychic":
          cardEl.style = "background-color: #eaeda1";
          break;
        case "flying":
          cardEl.style = "background-color: #F5F5F5";
          break;
        case "fighting":
          cardEl.style = "background-color: #E6E0D4";
          break;
        case "normal":
          cardEl.style = "background-color: #F5F5F5";
          break;
        case "fire":
          cardEl.style = "background-color: #FDDFDF";
          break;
        case "grass":
          cardEl.style = "background-color: #DEFDE0";
          break;
        case "ghost":
          cardEl.style = "background-color: #705898";
          break;
        case "ice":
          cardEl.style = "background-color: #98d8d8";
          break;
      }
}


const urlArray = [];


for(let i = 0; 1 <= 150; i++) {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) // ci restituisce una promise
    //.then((res) => res.json()) // convertire formato in json e restituisce una promise
    //.then((res) => createCard(res)) // richiamiamo la funzione per le card
    urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
};

let request = urlArray.map((url) => {
    return fetch(url).then((res) => res.json())
})

Promise.all(request).then((res) => res.map((r) => createCard(r)))

//quando lavoriamo con dei dati dall'esterno noi non possiamo essere sicuri
//che tali dati esistano

// con una funzione per verificare anche se i valori esistano
function createId (id) {
    if (!id) return null;
    if (id<10) {return `00${id}`}
    else if (id<100) {return `0${id}`};
    return id
}