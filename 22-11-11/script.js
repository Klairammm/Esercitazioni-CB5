import {somma, sottrazione, moltiplicazione, divisione} from "./calcolatrice.js";

import {ce, qs, GET} from "./utils.js";

//importare http server
import http from "http";

//importare l'url del localhost
import url from "url";

import fs from "fs";

//fare una prova per vedere se il server funziona
const server = http.createServer((req, res) => {
    //res.write("Bellaaaaa");
    const my_url = url.parse(req.url, true).pathname
    const params = url.parse(req.url, true).query
    const {param1, param2} = params
    console.log(param1, param2)

    //costruire lo switch
    switch(my_url) {
        case "/home":
            res.write("Home");
            break;
        case "/calcolatrice":
            const dataCalcolatrice = fs.readFileSync('./html/calcolatrice.html')   
            res.write(dataCalcolatrice.toString());
            break;  
        case "/somma":
            //res.write("Somma");
            const dataSomma = fs.readFileSync('./html/somma.html')   
            res.write(dataSomma.toString());
            res.write(`${somma(param1, param2)}` )
            break;   
        case "/sottrazione":
            //res.write("Sottrazione");
            const dataSottrazione = fs.readFileSync('./html/sottrazione.html')
            res.write(dataSottrazione.toString());
            res.write(`${sottrazione(param1, param2)}` )
            break;   
        case "/moltiplicazione":
            //res.write("Moltiplicazione");
            const dataMoltiplicazione = fs.readFileSync('./html/moltiplicazione.html')
            res.write(dataMoltiplicazione.toString());
            res.write(`${moltiplicazione(param1, param2)}` )
            break;  
        case "/divisione":
            const dataDivisione = fs.readFileSync('./html/divisione.html')
            res.write(dataDivisione.toString());
            res.write(`${divisione(param1, param2)}` )
            break;   
        case "/styleCalcolatrice.css":
            const styleC = fs.readFileSync("./styleCalcolatrice.css")
            res.write(styleC.toString())
        case "/styleForm.css":
            const styleF = fs.readFileSync("./styleForm.css")
            res.write(styleF.toString())
        default:
            res.write("<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Buenohome<a></p>")     
    }

    res.end()
})

//console.log(somma(1,2))

server.listen(3000)