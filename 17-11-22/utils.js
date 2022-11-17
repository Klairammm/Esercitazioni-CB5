const ce = (el) => document.createElement(el);

const qs = (el) => document.querySelector(el);

//-----------FUNZIONE GET-----------

// const GET = async (BASE_URL) => {
// 	const res = await fetch(BASE_URL);
// 	return await res.json();
// }

const GET = async(BASE_URL) => await fetch(BASE_URL)
.then((res) => res.json())
.then((data) => data)

//---------FINE FUNZIONE GET-----------

//-----------FUNZIONE POST-----------

const POST = async (BASE_URL, body) => {
	return await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
}

//-----------FINE FUNZIONE POST-----------

//-----------FUNZIONE DELETE-----------

const DELETE = async (BASE_URL, id) => {
    return await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
    });
  }

//-----------FINE FUNZIONE DELET-----------

export {ce,qs, GET, POST, DELETE}