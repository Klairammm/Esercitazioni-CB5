const formEl = document.forms.calcolatrice.elements;
const param1El = formEl.param1; //input primo num
const param2El = formEl.param2; //input secondo num
const btnEl = document.querySelectorAll(".btn") //tutti i bottoni
const risEl = document.querySelector(".result")

const GET = async (url) => {
    await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data.risultato))
}

for(let i = 0; i < btnEl.length; i++) {

    btnEl[i].addEventListener("click", (e) => {
            e.preventDefault();
            const par1 = param1El.value;
            const par2 = param2El.value;
            //capire che btn su cui si va a fare il click
            const par3 = btnEl[i].classList[1]
            let url = `http://localhost:3000/calcolatrice?param1=${par1}&param2=${par2}&param3=${par3}`

            GET(url);
    })

}