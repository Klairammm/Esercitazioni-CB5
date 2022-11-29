
const container = document.querySelector(".attori")

const urlAttori = "http://localhost:3000/attori"

const createCard = (items) => {
    for (let item of items){
    const cardEl = document.createElement("div")
    const nomeEl = document.createElement("h2")
    const cognomeEl = document.createElement("h2")
    const dataEl = document.createElement("h3")

    cardEl.className = "card"
    nomeEl.className = "nome"
    cognomeEl.className = "cognome"
    dataEl.className = "data"

    nomeEl.textContent = item.nome;
    cognomeEl.textContent = item.cognome;
    dataEl.textContent = item.data_nascita;

    cardEl.append(nomeEl, cognomeEl, dataEl)
    container.append(cardEl)
    }
}

// const GET = async (url) => {
//     await fetch(url)
//     .then((res) => res.json())
// }

fetch(urlAttori)
.then((res) => res.json())
.then((res) => createCard(res))