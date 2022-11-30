
const container = document.querySelector(".attori")

const urlAttori = "http://localhost:3000/attori"


const createCard = (items) => {
    for (let item of items){
    const cardEl = document.createElement("div")

    const idEl = document.createElement("p")
    const nomeEl = document.createElement("h2")
    const cognomeEl = document.createElement("h2")
    const dataEl = document.createElement("h3")



    cardEl.className = "card"
    idEl.className = "id__attore"
    nomeEl.className = "nome"
    cognomeEl.className = "cognome"
    dataEl.className = "data"


    idEl.textContent = `# ${item.id}`;
    nomeEl.textContent = item.nome;
    cognomeEl.textContent = item.cognome;
    dataEl.textContent = item.data_nascita;

    cardEl.append(idEl, nomeEl, cognomeEl, dataEl)
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

//----------------DELETE-----------------
// const DELETE = async (url,id) => {
//     const res = await fetch(url,{
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: new URLSearchParams({'id':id})
//     });
//     return await res.json();
// };

