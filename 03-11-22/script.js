import descriptions from "./descriptions.js";
import spaces from "./spaces.js";

console.log(descriptions)

const bodyEl = document.querySelector("body");

//collegare la sezione generica contenente tutte le card Materials
const cardDiv = document.querySelector("section")
cardDiv.className= "card"

//collegare la sezione generica contenente tutte le card Home
const cardHome = document.querySelector(".home__cards")

// evento button
const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", () => console.log("Ciao!"));

// creiamo la funzione per la creazione delle card

const createCard = (data, appendTo) => {
    const cardEl = document.createElement("div");
    const cardImgEl = document.createElement("img");
    const cardTitleEl = document.createElement("h1");
    const cardParEl = document.createElement("p");

    cardEl.className = "card__cont"
    cardImgEl.setAttribute("src", data.image)
    cardImgEl.setAttribute("alt", data.title)
    cardTitleEl.textContent = data.title
    cardParEl.textContent = data.caption

    //appendElements
    cardEl.append(cardImgEl, cardTitleEl, cardParEl);
    appendTo.append(cardEl);

}


descriptions.map((description) => createCard(description, cardDiv));
spaces.map((space) => createCard(space, cardHome));
