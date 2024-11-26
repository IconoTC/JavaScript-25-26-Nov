import { register } from './form.repo.js';

console.log('form.js loaded');

const formElement = document.querySelector('form');

function handleSubmit(event) {
    event.preventDefault();
    // Alternativa al formData
    // console.dir({
    //     name: event.target.elements[0].value,
    // });
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.password !== data.password2) {
        alert('Passwords do not match');
        return;
    }
    delete data.password2;
    register(data).then((result) => {
        console.log(event);
        console.log('Form submitted', result);
    });
}

formElement.addEventListener('submit', handleSubmit);
