const user = {
    name: 'Pepe',
};

// console.log(foo); // ReferenceError
console.log(user.foo); // undefined

// console.log(user.address.zip); // TypeError

console.log(user.address?.zip); // undefined

// console.log(null.foo); // TypeError

const user2 = structuredClone(user);

const animals = {
    hasBrain: true,
};

const person = {
    teeth: 32,
    // Mala práctica
    __proto__: animals,
};

// const user1 = {
//     name: 'Pepe',
//     __proto__: person
// };

const user1 = Object.create(person);
user1.name = 'Pepe';

user1.teeth = 31;

console.log('Dientes de Pepe', user1.teeth);
console.log('Tiene Pepe cerebro?', user1.hasBrain);

console.log(user1.hasOwnProperty('teeth'));
console.log(user1.hasOwnProperty('hasBrain'));

const foo = function () {};
foo.type = 'básico';
console.log(foo);
console.log(foo.hasOwnProperty('type'));
