// API Restful

// redes http / https

// Dos modos
// - Web
// - API Restful

// GET / POST / PUT / PATCH / DELETE

// Gestión de datos (CRUD)
// - Crear (Create) -> POST
// - Leer (Read) -> GET
// - Actualizar (Update) -> PUT / PATCH
// - Borrar (Delete) -> DELETE

// Peticiones http en javascript: fetch

const url = 'http://localhost:3001/users';
// 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message);
        console.log(url);
    });
