const invia_richiesta_post = async (url, nuovo_regista) =>{
    var nuovo_regista_array = [];
    for (var property in nuovo_regista) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(nuovo_regista[property]);
      nuovo_regista_array.push(encodedKey + "=" + encodedValue);
    }
    nuovo_regista_array = nuovo_regista_array.join("&");
    
    
    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: nuovo_regista_array

    });
    return await res.json();
  }
  
  
  function createRegista(nuovo_regista) {
    const url='http://localhost:3000/regista'
    return invia_richiesta_post(url, nuovo_regista);
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
    const reg = {
      id: idEl.value,
      nome: nameEl.value,
      cognome: surnameEl.value,
      data_nascita: data_nascitaEl.value,
      riconoscimenti: riconoscimentiEl.value,
      inizio_attivita: inizio_attivitaEl.value,
      fine_attivita: fine_attivitaEl.value,
      in_attivita: in_attivitaEl.value,
    };
    createRegista(reg).then((message)=>{
      alert(message);
    });
  });