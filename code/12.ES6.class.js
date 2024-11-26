class Person {
    #name;
    age;
    hasPet;
    constructor(name, age, hasPet) {
        this.#name = name;
        this.age = age;
        this.hasPet = hasPet;
        Person.add();
    }
    static counter = 0;
    static add() {
        Person.counter++;
    }
    greeting() {
        return `Hola, mi nombre es ${this.#name} y tengo ${this.age} años.`;
    }
}

class Student extends Person {
    course;
    constructor(name, age, hasPet, course) {
        super(name, age, hasPet);
        this.course = course;
    }
    greeting() {
        return `${super.greeting()} Estudio ${this.course}.`;
    }
}

const user1 = new Student('Juan', 30, true, 'React');
const user2 = new Student('Rosa', 32, true, 'Angular');

console.log('Total usuarios', Person.counter);

user1.surname = 'Perez';
delete user2.hasPet;
user2.age = 33;

console.log(user1.greeting());
console.log(user2.greeting());

console.log(user1, user2);
