
const ce = (el) => document.createElement(el);

const qs = (el) => document.querySelector(el);


//-----------FUNZIONE GET-----------

const GET = async (URL) => {
	const res = await fetch(URL);
	return await res.json();
}

//---------FINE FUNZIONE GET-----------

export {ce, qs, GET}