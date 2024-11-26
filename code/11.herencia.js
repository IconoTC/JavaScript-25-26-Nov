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

Person.prototype.greeting = function () {
    return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
};

function Student(name, age, hasPet, course) {
    Person.call(this, name, age, hasPet);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function () {
    return `${Person.prototype.greeting.call(this)} Estudio ${this.course}.`;
};

const user1 = new Student('Juan', 30, true, 'Angular');
const user2 = new Student('Rosa', 32, true, 'React');

console.log('Total usuarios', Person.counter);

user1.surname = 'Perez';
delete user2.hasPet;
user2.age = 33;
user1.organization = 'Yo que se';

console.log(user1.greeting());
console.log(user2.greeting());

console.log(user1, user2);
