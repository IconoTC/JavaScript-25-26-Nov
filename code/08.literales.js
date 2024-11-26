// Objetos literales

const user1 = {
    name: 'Juan',
    age: 30,
    isAlumno: true,
    greeting: function () {
        return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
    },
};

const user2 = {
    name: 'Rosa',
    age: 32,
    isAlumno: true,
    greeting: function () {
        return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
    },
};

console.log(user1.greeting());
console.log(user2.greeting());
