const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);


//-----------FUNZIONE GET-----------

const GET = async (URL) => {
	const res = await fetch(URL);
	return await res.json();
}

//---------FINE FUNZIONE GET-----------

//-----------FUNZIONE POST-----------

const POST = async (URL, body) => {
	return await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
}

//-----------FINE FUNZIONE POST-----------

//-----------FUNZIONE DELETE-----------

const DELETE = async (URL, id) => {
    return await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
    });
  }

//-----------FINE FUNZIONE DELET-----------


//-----------------FUNZIONE ID---------------
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}

//--------------FINE ID--------------

//----------------FUNZIONE CREATE CARD--------------
const createCard = (url, parent, name, type, id) => {
    const wrapperEl = c('li');
    const cardEl = c("div")
    const nameEl = c('p');
    const typeEl = c('p');
    const btn = c('button');
  
    wrapperEl.className = "list__card"
  
    nameEl.textContent = name
    typeEl.textContent = `Type: ${type}`
    btn.textContent = "❌"

    btn.addEventListener("click", () => {
        //console.log("clicked")
        DELETE(url, id)
    })
  
    cardEl.append(nameEl, typeEl, btn);
    wrapperEl.append(cardEl);
    parent.appendChild(wrapperEl);
  }

//----------------FUNZIONE CREATE CARD--------------

export { c, q, GET, POST, DELETE, uuidv4, createCard }