import {q, c, getId, GET} from './utils.js'

const cont = q(".container")
const card = q(".card")
const btns = q(".btns")

const loadEl = q(".loading")

const postId = q(".p__id")
const postTitle = q(".p__title")
const postBody = q(".p__body")

const btnBack = q(".btnB")
const btnNext = q(".btnN")

//------GLOBAL VARIABLES------
let index = 1
const url = `https://jsonplaceholder.typicode.com/posts`



//BTN + EVENT LISTENER
btnBack.addEventListener("click", (e) => {
    //evento causato dal btn
    let instruction = e.target.textContent;
    getPost(instruction)
})

btnNext.addEventListener("click", (e) => {
    //evento causato dal btn
    let instruction = e.target.textContent;
    getPost(instruction)
})


//FETCH
// fetch(url)
// .then((res) => res.json())
// .then((res) => console.log(res))


const getPost = (instruction) => {
    //console.log(instrucstion) -> back o next

    if (!instruction) { //se non esite
        instruction = 1
    } else {
        instruction = instruction.toLowerCase()
    }

    //condizionare l'index
    switch (instruction) {
        case 'back':
            index -= 1;
            break;
        case 'next':
            index += 1;
            break;
        default: //1
            index = instruction;
    }


    GET(`${url}/${index}`)
    //.then(res => console.log(res))
    .then (res => {
        postId.textContent = `#${getId(res?.id)}`
        postTitle.textContent = (res?.title).charAt(0).toUpperCase() + (res?.title).slice(1);
        postBody.textContent = (res?.body).charAt(0).toUpperCase() + (res?.body).slice(1);
        loadEl.classList.remove("active")
    })

    //btn conditions
    if (index <= 1) {
        btnBack.disabled = true;
        //btnBack.classList.add("disabled")
    } else {
        btnBack.disabled = false;
        //btnBack.classList.remove("disabled")
    }

    if (index >= 10) {
        btnNext.disabled = true;
        //btnNext.classList.add("disabled")
    } else {
        btnNext.disabled = false;
        //btnNext.classList.remove("disabled")
    }

    //appendElements
    card.append(postId, loadEl, postTitle, postBody)
    btns.append(btnBack, btnNext)
    cont.append(card, btns)
}

window.onload = getPost();

// con ? aggiungiamo dei controlli per verificare se i valori esistono o meno(undefined)"
