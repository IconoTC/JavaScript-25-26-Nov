function Person(name, age, hasPet) {
    this.name = name;
    this.age = age;
    this.hasPet = hasPet;
    Person.add();
}

Person.counter = 0;
Person.add = function () {
    Person.counter++;
};

Person.prototype.organization = 'IES Campanillas';
Person.prototype.greeting = function () {
    return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
};

const user1 = new Person('Juan', 30, true);
const user2 = new Person('Rosa', 32, true);

console.log('Total usuarios', Person.counter);

user1.surname = 'Perez';
delete user2.hasPet;
user2.age = 33;
user1.organization = 'Yo que se';

console.log(user1.greeting());
console.log(user2.greeting());

console.log(user1, user2);

console.log(user1.organization);
console.log(user2.organization);

// Funciones constructoras nativas en JS

const obj = new Object();
const arr = new Array();

console.log(arr instanceof Array);
console.log(arr instanceof Object);

arr.push(1);
Array.isArray(arr);

const cad = 'Hola';

cad.replace('o', '_'); // => coercion a new String()
String.raw('');
