// Realizzare un Pokédex di soli 150 Pokemon.
// Sito di riferimento dell'API Pokemon: https://pokeapi.co/
// I dati che dovrete estrapolare sono: numero del Pokémon all'interno del pokédex, nome del Pokémon e tipo (fuoco, erba etc.)
// Il colore della card sarà determinato dal tipo del Pokémon

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


fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
.then((res) => res.json())
//.then((res) => console.log(res)) -> Array formata da name e url
.then((pokemon) => { 
    pokemon.results.forEach((item) => fetch(item.url)
    .then((res) => res.json())
    .then((poke) => createCard(poke))) 
}
)
//in caso di errore
.catch((er) => console.log("Error" + er))
//fine
.finally(() => console.log("The End"))