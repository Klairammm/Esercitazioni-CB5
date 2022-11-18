//console.log("Ciao Pippo!");

import { c, q, GET, POST, DELETE, PATCH, uuidv4, createCard } from "./utils.js"
const url = "http://localhost:3000/pokemon"
//const inputEl = q(".seach__input")

// FORM SUBMIT -> POST
const ul = q(".poke__list")
const form = document.forms.pokemon
const element = form.elements



// FORM MODIFY -> PATCH
const formPatch = document.forms.pokemonPatch
const elementsFP = formPatch.elements

formPatch.addEventListener("submit", (e) => {
    //prevenire e bloccare l'evento
    e.preventDefault();

    const id = elementsFP.id.value

    const data = {
      name: elementsFP.name.value,
      type: elementsFP.type.value
    }

    PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e))
})



//Aggiungere evento al form
form.addEventListener("submit", (e) => {
    //prevenire e bloccare l'evento
    e.preventDefault()
    //raccogliere i dati
    const data = {
        id: uuidv4(),
        name: element.poke__name.value,
        type: element.poke__type.value
    }
    //console.log(data)

    //API che ci permette di mandare i dati all'esterno 
    //utilizzando non un metodo GET ma di POST
    //specificando che tipo di dati mandiamo
    //operando un parse dell'object con stringify
    //commentiamo il fetch per utilizzare la POST della utils
    // fetch("http://localhost:3000/pokemon", {
        
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
        
    // })

    POST(url, data)
    //controllare se è andato tutto a buon fine o meno
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })

    // .finally(() => {
    //     //andare a fare una nuova fetch con i dati nuovi
    //     fetch("http://localhost:3000/pokemon")
    //     .then((res) => res.json())
    //     .then((res) => document.write(res[0]))
    // })
})

// al termine della fetch vogliamo vedere i nostri dati
// getPoke commentata per utilizzare la GET delle utils utilizzando l'ultimo then
// const getPoke = () => {
//     fetch("http://localhost:3000/pokemon")
//     .then((res) => res.json())
//      .then((res) => res.map(pkm => ul.innerHTML += `<li>${pkm.name}</li>`)) }
    

// eseguire la funzione ogni volta che c'è un reload
window.onload = GET(url)
.then((res) => res.map(pkm => createCard(url, ul, pkm?.name, pkm?.type, pkm?.id)))

// inputEl.addEventListener("input", (e) => {
//   const searchString = e.target.value;
//   ul.replaceChildren()
//   //filtro 
//   const pokeFiltered = res.filter(poke => poke?.name.includes(searchString))
//   pokeFiltered.map(poke => createCard(poke, ul))
// })