//creiamo server (0)
const express = require('express')
const fs = require('fs')
const app = express()


//apriamo la cartella public
app.use(express.static('public'))
//includiamo urlencoded 
//che ci serve per leggere i parametri da post
app.use(express.urlencoded({extended: false}))

//server in ascolto
app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000")
})

//DELETE
app.get("/delete", function (req, res) {
    res.sendFile("delete.html", {root: __dirname+"/src"});
});

//PUT
// app.get("/create", function (req, res) {
//     res.sendFile("create.html", { root: __dirname + "/src" });
//     });


//a questo punto provare se il server va scrivendo sul terminale -> npm start

app.get("/home", function (req, res) {
    res.sendFile("index.html", {root: __dirname + "/src"})
});

//prima chiamata per ottenere gli attori e dovrebbe tornare un json 
app.get("/attori", function(req, res){  
    //leggere il file

    const attori_text = fs.readFileSync("./src/attori.json", "utf8");
    const attori = JSON.parse(attori_text);
    //fare un map perchè vogliamo solo alcuni elementi
    const arr_attori = attori.map((att) => {
        // const id = att.id
        // const nome = att.nome
        // const cognome = att.cognome
        // const datanascita = att.data_nascita
        const {id,nome,cognome, data_nascita} = att
        return {id, nome, cognome, data_nascita}
    }) 
    res.json(arr_attori) 
})
//andare a controllare su postman se funziona(1)

//stabilire lo stato per vedere se funziona e scrivere al singolare perchè si va ad incidere su un singolo elemento
app.post("/attore", function (req, res) {
    //console.log("Parametri: " + JSON.stringify(req.params, null, 4));
    //console.log("Body: " + JSON.stringify(req.body, null, 4));


    if (req.body.nome == undefined) {
        res.status(400).send("Attore not found")
    }

    if (req.body.cognome == undefined) {
        res.status(400).send("Attore not found")
    }
  
    const nuovo_attore = {
      id: req.body.id == undefined ? '' : parseInt(req.body.id),
      nome: req.body.nome,
      cognome: req.body.cognome,
      data_nascita: req.body.data_nascita == undefined ? '' : req.body.data_nascita,
      riconoscimenti: req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
      inizio_attivita: req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
      fine_attivita: req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
      in_attivita: req.body.in_attivita == undefined ? '' : req.body.in_attivita,
    };

    
    //console.log("il mio parametro: " + req.body.id);
  
    const attori_text = fs.readFileSync("./src/attori.json", "utf-8");
    const attori = JSON.parse(attori_text);
  
    const index = Number(nuovo_attore.id) - 1;
    console.log("Nuovo Attore: " + index);
    attori[index] = nuovo_attore;
  
    //attori[Number(nuovo_attore.id) - 1] = nuovo_attore;
    console.log(attori);
    
    fs.writeFileSync("./src/attori.json", JSON.stringify(attori))

    res.status(200).send("Attore creato");
  });

//leggere informazioni per singolo attore 
app.get("/attore", function(req, res){
    // -------------lettura parametro ---------------------
    const id_attore = parseInt(req.query.id);
    if (isNaN(id_attore)){
        res.status(400).send("Parametro mancante!");
    }
    // console.log("ID attore: "+id_attore);
    // ---------------------------------------------

    // -------------lettura dati da file ---------------------
    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------

    // ------------- filtro i dati -----------------------------
    const attr = attori.find((attore)=>{
        return attore.id == id_attore;
    });
    // ---------------------------------------------
    // console.log("Attore: "+attr);
    if (typeof attr === 'undefined'){
        console.log("Attore undefined ");
        res.status(200).send("Attore non trovato!");
    } else {  
        res.json(attr);
    }
});

  

app.put("/attore", function(req, res) {
    if (req.body.nome == undefined) {
        res.status(400).send("Nome attore not found")
    }

    if (req.body.cognome == undefined) {
        res.status(400).send("Cognome attore not found")
    }
  
    const nuovo_attore = {
      id: req.body.id == undefined ? '' : parseInt(req.body.id),
      nome: req.body.nome,
      cognome: req.body.cognome,
      data_nascita: req.body.data_nascita == undefined ? '' : req.body.data_nascita,
      riconoscimenti: req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
      inizio_attivita: req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
      fine_attivita: req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
      in_attivita: req.body.in_attivita == undefined ? '' : req.body.in_attivita,
    };

    //lettura file
    const attori_text = fs.readFileSync("./src/attori.json", "utf-8");
    const attori = JSON.parse(attori_text);

    //trovare l'elemento e ancellarlo
    const index = attori.findIndex((attore) => {
        attore.id === nuovo_attore.id
    })
    //console.log("indice: "+ index)

    if(index > 0) {
        //modifica
        attori.splice(index, 1, nuovo_attore); 
        //attori[index] = nuovo_attore;
        fs.writeFileSync('./src/attori.json', JSON.stringify(attori))
        res.status(200).send("Attore aggiornato")
    } else {
        res.status(200).send("Attore not found")
    }

    //modificare l'elemento
    //salvare il file
    res.status(200).send("Attore aggiornato")
})

app.delete("/attore", function(req, res){
    // ricevo l'id
    if (req.body.id === undefined){
        res.status(400).send("Parametro id mancante!");
    }
    if (isNaN(parseInt(req.body.id))) {
        res.status(400).send("Parametro non numerico!");
    }

    const id_da_cancellare = req.body.id;

    // -------------lettura dati da file ---------------------
    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------
    
    // verifico che l'elemento esista
    const attr = attori.filter((attore)=>{
        return attore.id == id_da_cancellare;
    });

    // se l'elemento esiste lo cancello
    if (attr.length > 0) {
        const array_deleted = attori.filter((attore)=>{
            return attore.id != id_da_cancellare;
        });
        fs.writeFileSync('./src/attori.json',JSON.stringify(array_deleted));
        //console.log(array_deleted);
        //res.json(array_deleted);
        res.status(200).send("Attore deleted");
    } else {
        res.status(200).send("Attore da cancellare non trovato");
    }
});
