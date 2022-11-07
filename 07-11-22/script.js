// I dati ai quali ci interessa accedere sono i seguenti: 
// users: name, address e city
// todos: ids e title

//dentro il fetch() inserire l'url di dove si trovano i dati che vogliamo ottenere
//console.log(fetch("https://jsonplaceholder.typicode.com/users"));
//console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
//in console abbiamo due promise

// ------------USERS
fetch("https://jsonplaceholder.typicode.com/users")

// convertire il formato col metodo .json
.then((res) => res.json())

// prendere i dati e controllarli
//.then((data) => console.log("dati users:", data))

//prendere solo i dati che ci servono (name, address e city)
.then((users) => users.forEach((user) => console.log(`Name: ${user.name} \n Address: ${user.address} \n City: ${user.address.city}`)))

//in caso di errore
.catch((er) => console.log("Error" + er))

//per separare i risultati
.finally(() => console.log("FINE SEZIONE USERS"));

// ------------TODOS
fetch("https://jsonplaceholder.typicode.com/todos")

// convertire il formato col metodo .json
.then((res) => res.json())

// prendere i dati e controllarli
//.then((data) => console.log("dati todos:", data))

//prendere solo i dati che ci servono (id e title)
//.then((todos) => todos.forEach((todo) => console.log(todo.id, todo.title)))
.then((todos) => todos.forEach((todo) => console.log(`ID: ${todo.id} \n Title: ${todo.title}`)))

//in caso di errore
.catch((er) => console.log("Error" + er))

//fine dell'esercizio
.finally(() => console.log("FINE SEZIONE TODOS"));




