const express = require("express");
const fs = require("fs");
// const attoriRouting = require("./src/routing_attori.js");

const app = express();
// app.use('/attore',attoriRouting);

const middlewareProvaAttori = (req, res, next) => {
    console.log(1);
    console.log("Richiesta ricevuta.");
    next();
} 
app.use('/attore', middlewareProvaAttori);

const middlewareProvaRegisti = (req, res, next) => {
    console.log(1);
    console.log("Richiesta ricevuta.");
    next();
} 
app.use('/regista', middlewareProvaRegisti);

const auth = (req, res, next) => {
    if(req.body.token == undefined || req.body.token.length==0) {
        res.status(403).send("Utente non autorizzato");
    }
    const token = req.body.token;
    if(token != 'qwerty') {
        res.status(403).send("Utente non autorizzato");
    }

    next();
} 

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.listen(3000,()=>{
    console.log("Server in ascolto sulla porta 3000");
});

app.post("/login", function(req, res) {
    if(req.body.username == undefined || req.body.username.length==0) {
        res.status(400).send("Username mancante");
    }

    if(req.body.password == undefined || req.body.password.length==0) {
        res.status(400).send("Password mancante");
    }

    if(req.body.password === req.body.username) {
        res.json({token:"qwerty"});
    } else  {
        res.status(400).send("Credenziali errate.");
    }
});

//----------------collegamento pagina-----------

app.get("/search", function (req, res) {
    console.log(2);
    res.sendFile("search.html", { root: __dirname + "/src/html" });
  });

app.get("/delete", function (req, res) {
    res.sendFile("delete.html", {root: __dirname+"/src/html"});
});
  
app.get("/create", function (req, res) {
    res.sendFile("create.html", { root: __dirname + "/src/html" });
});
  
app.get("/update", function (req, res) {
    res.sendFile("update.html", { root: __dirname + "/src/html" });
});

app.get("/create_regista", function (req, res) {
    res.sendFile("create_regista.html", { root: __dirname + "/src/html" });
});

// ------------------------ ATTORI ------------------

app.get("/", function(req, res) {
    const id_attore = req.query.id;
    if (id_attore == undefined) {
        res.status(400).send("Parametro id non trovato.");
    }
    const id_attore_numerico = parseInt(id_attore);
    if (isNaN(id_attore_numerico)) {
        res.status(400).send("Parametro inviato non è un numero.");
    }

    const attori = fs.readFileSync('./src/attori.json');
    const attori_json = JSON.parse(attori);

    const m_attore = attori_json.filter((attore) => {
        return attore.id === id_attore_numerico;
    })
    res.json(m_attore[0]);

});


app.get("/name", function(req, res) {
    const name_attore = req.query.name;
    if (name_attore == undefined) {
        res.status(400).send("Parametro id non trovato.");
    }

    const attori = fs.readFileSync('./src/attori.json');
    const attori_json = JSON.parse(attori);

    const m_attore = attori_json.filter((attore) => {
        return attore.nome.toLowerCase() === name_attore.toLowerCase();
    })
    res.json(m_attore[0]);

});

app.post("/",auth, function(req, res){
    console.log(6);
    if(req.body.nome == undefined || req.body.nome.length==0) {
        res.status(400).send("Nome attore mancante");
    }

    if(req.body.cognome == undefined || req.body.cognome.length==0) {
        res.status(400).send("Cognome attore mancante");
    }

    const nuovo_attore = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }
    // -------------lettura dati da file ---------------------
    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------

    // trova il primo id
    const arr_map = attori.map(attore => attore.id);
    const id_max = Math.max(...arr_map);
    nuovo_attore.id = id_max +1;

    // trova la prima posizione disponibile
    const index = attori.length;
    attori[index] = nuovo_attore;
    fs.writeFileSync('./src/attori.json',JSON.stringify(attori));
    res.status(200).send("Attore creato");
})


app.delete("/",auth, function(req, res){
    console.log(7);
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
        res.status(200).send("Attore cancellato");
    } else {
        res.status(200).send("Attore da cancellare non trovato");
    }
});


app.put("/", auth,function(req, res){
    if (req.body.nome == undefined){
        res.status(400).send("Parametro nome mancante!");
    }

    if (req.body.cognome == undefined){
        res.status(400).send("Parametro cognome mancante!");
    }

    const nuovo_attore = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }
    // -------------lettura dati da file ---------------------
    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------

    // Trovare il primo id disponibile
    // trovare la prima posizione disponibile
    
    // trovare e cancellare l'elemento
    const index = attori.findIndex((attore) => {
        return attore.id === nuovo_attore.id
    });
    console.log("indice: "+index);

    if(index >= 0) {
        attori.splice(index, 1, nuovo_attore);

        //attori[index] = nuovo_attore;
        console.log(attori);
        fs.writeFileSync('./src/attori.json',JSON.stringify(attori));
        res.status(200).send("Attore aggiornato");
    } else {
        res.status(200).send("Attore non trovato");
    }

})


///--------------------------------------------------









app.get("/registi", function(req, res){
    res.json([
        {
          "id": 1,
          "nome": "Kim",
          "cognome": "Ki-Duk",
          "data_nascita": "03/07/1962",
          "riconoscimenti": "Elenco premi vinti",
          "inizio_attivita": "1980",
          "fine_attivita": "",
          "in_attivita": true
        },
        {
          "id": 2,
          "nome": "Takashi",
          "cognome": "Miike",
          "data_nascita": "17/08/1943",
          "riconoscimenti": "Elenco premi vinti",
          "inizio_attivita": "1960",
          "fine_attivita": "",
          "in_attivita": true
        },
        {
          "id": 3,
          "nome": "Ingmar",
          "cognome": "Bergman",
          "data_nascita": "29/04/1970",
          "riconoscimenti": "tanti",
          "inizio_attivita": "1998",
          "fine_attivita": "",
          "in_attivita": "true"
        },
        {
            "id": 4,
            "nome": "Quentin",
            "cognome": "Tarantino",
            "data_nascita": "27/03/1963",
            "riconoscimenti": "Da tutti",
            "inizio_attivita": "1990",
            "fine_attivita": "",
            "in_attivita": "true"
          }
      ]);
});

app.get("/registaaaaa", function(req, res){
    res.json(
        {
          "id": 1,
          "nome": "Kim",
          "cognome": "Ki-Duk",
          "data_nascita": "03/07/1962",
          "riconoscimenti": "Elenco premi vinti",
          "inizio_attivita": "1980",
          "fine_attivita": "",
        });
});

app.get("/regista", function(req, res) {
    const id_regista = req.query.id;
    if (id_regista == undefined) {
        res.status(400).send("Parametro id non trovato.");
    }
    const id_regista_numerico = parseInt(id_regista);
    if (isNaN(id_regista_numerico)) {
        res.status(400).send("Parametro inviato non è un numero.");
    }

    const registi = fs.readFileSync('./src/registi.json');
    const registi_json = JSON.parse(registi);

    const m_regista = registi_json.filter((regista) => {
        return regista.id === id_regista_numerico;
    })
    res.json(m_regista[0]);

});

app.post("/regista", auth, function(req, res) {
    res.status(200).send("Sono la funzione post dei registi");
});
app.put("/regista",auth, function(req, res) {});
app.delete("/regista",auth, function(req, res) {});