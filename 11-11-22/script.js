let i = 1
let result = `https://pokeapi.co/api/v2/pokemon/${i}`

fetch(result)
.then((res) => res.json())
.then((res) => createCard(res))

// const getNewPost = (i) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   };

// Funzione per la creazione delle card
//dichiarazioni funzioni
const card = document.getElementById("cards")
const cardEl = document.createElement("div");
const cardImg = document.createElement("img");
const cardID = document.createElement("h3");
const cardName = document.createElement("h1");
const cardType = document.createElement("h3");

const createCard = (res) => {

    cardEl.className = "card__el"

    //background-color
    cardEl.classList.add(`bg-${res.types[0].type.name}`)    
    cardImg.setAttribute("src", res.sprites.other.dream_world.front_default)
    cardImg.setAttribute("alt", "img")
    cardID.textContent = `#${createId(res.id)}`   
    cardName.textContent = res.name
    cardType.textContent = `Type: ${res.types[0].type.name}`  
 
    //appendElements
    cardEl.append(cardImg, cardID, cardName, cardType);
    card.append(cardEl);
}

// Funzione per verificare sia se i valori esistano e, in caso affermativo, generare l'ID
function createId (id) {
    if (!id) return null;
    if (id<10) {return `00${id}`}
    else if (id<100) {return `0${id}`};
    return id
}

const btnBack = document.getElementById("back")
const btnNext = document.getElementById("next")

btnNext.addEventListener("click", () => {
    i++
    result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res))
    if (i>= 151) btnNext.disable = true
    if (i === 1) btnBack.disable = true
    else btnBack.disable = false
    
  });

btnBack.addEventListener("click", () => {
    i--
    result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res))
    if (i<=2) btnNext.disable = true
    else btnBack.disable = true
    btnNext.disable = false
})

window.onload = btnBack.disable = true