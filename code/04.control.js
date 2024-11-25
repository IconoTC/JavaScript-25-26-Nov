import { totalSum } from './tools.js';

const cad = 'Hola mundo';
console.log(cad.length);

for (let i = 0; i < cad.length; i++) {
    // const item = cad[i];
    // console.log(item);
    console.log(cad[i]);
}

console.log('for/of');

for (const item of cad) {
    console.log(item);
}

let numbers = [2, 5, 7, 4, 9];
console.log(totalSum(numbers));
console.log({ numbers });

const user = {
    name: 'Pepe',
    age: 22,
    isAlumno: true,
};

for (const key in user) {
    const value = user[key];
    console.log(`La propiedad ${key} vale ${value}`);
}

console.log(user);
