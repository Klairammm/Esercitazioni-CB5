
const bodyEl = document.querySelector("body");

// Creazione hero

const heroEl = document.createElement("div");
heroEl.className = "copertina";

// img
const imgEl = document.createElement("img");
imgEl.setAttribute("src", "./Immagini/imgcopertina.jpg");
imgEl.setAttribute("alt", "imgCopertina");

// creazione secondo div
const heroText = document.createElement("span");

// title
const titleEl = document.createElement("h1");
titleEl.textContent = "GameShop"

// paragraph
const pEl = document.createElement("p")
pEl.textContent = ">> Trova il gioco più adatto a te <<"

// span appendElements
heroText.append(titleEl, pEl)

// div appendElements
heroEl.append(imgEl, heroText);

//------------------------------------------------------------

// sezione cards

const secElNew = document.createElement("section");
secElNew.className = "new__arrivals";

// sezione cards -> titolo
const secTitle = document.createElement("h1");
secTitle.className = "textNA";
secTitle.textContent = "New Arrivals";

// sezione cards -> cards
const createCard = (title, imgUrl, category, description) => {
    const cardEl = document.createElement("div");
  
    cardEl.className = "card";

    // cards -> title
    const titleEl = document.createElement("h1");
    titleEl.textContent = title;
  
    // cards -> img
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", category);
    
    // cards -> category
    const parCat = document.createElement("p");
    parCat.textContent = description;

    // cards -> description
    const parDes = document.createElement("p");
    parDes.textContent = description;
  
    cardEl.append(titleEl, imgEl, parCat, parDes);
    secElNew.appendChild(cardEl);
  };

//------------------------------------------------------------
//secElNew appendElements
secElNew.appendChild(secTitle, cardEl)

//------------------------------------------------------------
// body appendElements
bodyEl.appendChild(heroEl);
bodyEl.appendChild(secElNew);
