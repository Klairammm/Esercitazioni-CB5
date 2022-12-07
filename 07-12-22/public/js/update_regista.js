function getRegista(nome) {
    const url = `http://localhost:3000/regista_name?name=${nome}`;
    const GET = async (url) => {
      const res = await fetch(url);
      return await res.json();
    };
    return GET(url);
  }
  const invia_richiesta_put = async (url, nuovo_regista) =>{
   
    const res = await fetch(url,{
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer "+ token
      },
      body: new URLSearchParams(nuovo_regista)
    });
    return await res.json();
  }
  
  
  function updateActor(nuovo_regista) {
    const url='http://localhost:3000/regista'
    return invia_richiesta_put(url, nuovo_regista);
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
    getRegista(nameEl.value).then((director) => {
        // verifico che la richiesta ha tornato il json dei dati
        if(director.id != undefined) {
            idEl.value = director.id;
            nameEl.value = director.nome;
            surnameEl.value = director.cognome;
            data_nascitaEl.value = director.data_nascita;
            riconoscimentiEl.value = director.riconoscimenti;
            inizio_attivitaEl.value = director.inizio_attivita;
            fine_attivitaEl.value = director.fine_attivita;
            in_attivitaEl.value = director.in_attivita;
        }

    });
  });

  update_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const director = {
      id: idEl.value,
      nome: nameEl.value,
      cognome: surnameEl.value,
      data_nascita: data_nascitaEl.value,
      riconoscimenti: riconoscimentiEl.value,
      inizio_attivita: inizio_attivitaEl.value,
      fine_attivita: fine_attivitaEl.value,
      in_attivita: in_attivitaEl.value,
    };
    updateActor(director).then((message)=>{
      alert(message);
    });
  });