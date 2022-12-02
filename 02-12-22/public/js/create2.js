const invia_richiesta_post = async (url, nuovo_attore) =>{
  var nuovo_attore_array = [];
  for (var property in nuovo_attore) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(nuovo_attore[property]);
    nuovo_attore_array.push(encodedKey + "=" + encodedValue);
  }
  nuovo_attore_array = nuovo_attore_array.join("&");
  
  
  const res = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: nuovo_attore_array
    //body: new URLSearchParams(nuovo_attore)
  });
  return await res.json();
}


function createActor(nuovo_attore) {
  const url='http://localhost:3000/attore'
  return invia_richiesta_post(url, nuovo_attore);
}





const create_btn = document.getElementById("create-btn");
const idEl = document.getElementById("id");
const nameEl = document.getElementById("nome");
const surnameEl = document.getElementById("cognome");
const data_nascitaEl = document.getElementById("data_nascita");
const riconoscimentiEl = document.getElementById("riconoscimenti");
const inizio_attivitaEl = document.getElementById("inizio_attivita");
const fine_attivitaEl = document.getElementById("fine_attivita");
const in_attivitaEl = document.getElementById("in_attivita");

const container = document.getElementById("container");

create_btn.addEventListener("click", (e) => {
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
  createActor(actor).then((message)=>{
    alert(message);
  });
});
