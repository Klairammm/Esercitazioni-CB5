function getRegista(id) {
    const url = `http://localhost:3000/regista?id=${id}`;
    const GET = async (url) => {
      const res = await fetch(url);
      return await res.json();
    };
    return GET(url);
  }
  
  const search_btn = document.getElementById("search-btn");
  const idEl = document.getElementById("id");
  
  const container = document.getElementById("container");
  
  search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    getRegista(idEl.value).then((director) => {
      container.textContent = "";
      createCard(director);
    });
  });
  
  const createCard = (director) => {
    const cardEl = document.createElement("div");
    const infoEl = document.createElement("h2");
    const nameEl = document.createElement("p");
    const surnameEl = document.createElement("p");
    const data_nascitaEl = document.createElement("p");
  
    infoEl.textContent = "Informazioni";
    cardEl.classList = "card";
    nameEl.classList = "director_name";
    surnameEl.classList = "director_surname";
    data_nascitaEl.classList = "director_data_nascita";
  
    nameEl.textContent = "Nome: " + director.nome;
    surnameEl.textContent = "Cognome: " + director.cognome;
    data_nascitaEl.textContent = "Data di nascita: " + director.data_nascita;
  
    cardEl.append(infoEl, nameEl, surnameEl, data_nascitaEl);
    container.append(cardEl);
  };
  