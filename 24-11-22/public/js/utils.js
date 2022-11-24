
// //-------------SOMMA----------------

// function func_somma() {
//     const fai_somma = async () => {
//         const url = "http://localhost:3000/somma?param1=2&param2=3";
//         console.log("Async start");
//         const res = await fetch(url);
//         alert(res);
//         return await res.json();
//     }
//     let result =  fai_somma(); 
// }

// //-------------FINE SOMMA----------------

// //-------------SOTRAZIONE----------------

// function func_sottrazione() {
//     const fai_sottrazione = async () => {
//         const url = "http://localhost:3000/sottrazione?param1=10&param2=2";
//         console.log("Async start");
//         const res = await fetch(url);
//         alert(res);
//         return await res.json();
//     }
//     let result =  fai_sottrazione(); 
// }

// //-------------FINE SOTTRAZIONE----------------

// //-------------MOLTIPLICAZIONE----------------

// function func_moltiplicazione() {
//     const fai_moltiplicazione = async () => {
//         const url = "http://localhost:3000/moltiplicazione?param1=2&param2=3";
//         console.log("Async start");
//         const res = await fetch(url);
//         alert(res);
//         return await res.json();
//     }
//     let result =  fai_moltiplicazione(); 
// }

// //-------------FINE MOLTIPLICAZIONE----------------

// //-------------DIVISIONE----------------

// function func_divisione() {
//     const fai_divisione = async () => {
//         const url = "http://localhost:3000/divisione?param1=10&param2=2";
//         console.log("Async start");
//         const res = await fetch(url);
//         alert(res);
//         return await res.json();
//     }
//     let result =  fai_divisione(); 
// }

// //-------------FINE DIVISIONE----------------

//##########################################

const formElement = document.forms.formEl.elements;
console.log(formElement);

const GET = async (url) => { 
    await fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }


//BOTTONE SOMMA

const btn_somma = formElement.btnSomma;

btn_somma.addEventListener("click", () => {
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2};`
    console.log(url);
    GET(url);
});

//FINE BOTTONE SOMMA

//BOTTONE SOTTRAZIONE
const btn_sottrazione = formElement.btnSottrazione;

btn_sottrazione.addEventListener("click", () => {
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2};`
    console.log(url);
    GET(url);
});

//FINE BOTTONE SOTTRAZIONE

//BOTTONE MOLTIPLICAZIONE
const btn_moltiplicazione = formElement.btnMoltiplicazione;

btn_moltiplicazione.addEventListener("click", () => {
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2};`
    console.log(url);
    GET(url);
});

//FINE BOTTONE MOLTIPLICAZIONE

//BOTTONE DIVISIONE

const btn_divisione = formElement.btnDivisione;

btn_divisione.addEventListener("click", () => {
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2};`
    console.log(url);
    GET(url);
});

//FINE BOTTONE MOLTIPLICAZIONE