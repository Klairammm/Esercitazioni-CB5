function getActor(nome) {
    const url = `http://localhost:3000/attore_name?name=${nome}`;
    const GET = async (url) => {
      const res = await fetch(url);
      return await res.json();
    };
    return GET(url);
  }
  const invia_richiesta_put = async (url, nuovo_attore) =>{
   
    const res = await fetch(url,{
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(nuovo_attore)
    });
    return await res.json();
  }
  
  
  function updateActor(nuovo_attore) {
    const url='http://localhost:3000/attore'
    return invia_richiesta_put(url, nuovo_attore);
  }




const search_btn = document.getElementById("search-btn");
const update_btn = document.getElementById("update-btn");
const idEl = document.getElementById("id");
const nameEl = document.getElementById("nome");
const surnameEl = document.getElementById("cognome");
const data_nascitaEl = document.getElementById("data_nascita");
const riconoscimentiEl = document.getElementById("riconoscimenti");
const inizio_attivitaEl = document.getElementById("inizio_attivita");
const fine_attivitaEl = document.getElementById("fine_attivita");
const in_attivitaEl = document.getElementById("in_attivita");

const container = document.getElementById("container");


search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    getActor(nameEl.value).then((actor) => {
        // erifico che la richiesta ha tornato il json dei dati
        if(actor.id != undefined) {
            idEl.value = actor.id;
            nameEl.value = actor.nome;
            surnameEl.value = actor.cognome;
            data_nascitaEl.value = actor.data_nascita;
            riconoscimentiEl.value = actor.riconoscimenti;
            inizio_attivitaEl.value = actor.inizio_attivita;
            fine_attivitaEl.value = actor.fine_attivita;
            in_attivitaEl.value = actor.in_attivita;
        }

    });
  });

  update_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const actor = {
      id: idEl.value,
      nome: nameEl.value,
      cognome: surnameEl.value,
      data_nascita: data_nascitaEl.value,
      riconoscimenti: riconoscimentiEl.value,
      inizio_attivita: inizio_attivitaEl.value,
      fine_attivita: fine_attivitaEl.value,
      in_attivita: in_attivitaEl.value,
    };
    updateActor(actor).then((message)=>{
      alert(message);
    });
  });