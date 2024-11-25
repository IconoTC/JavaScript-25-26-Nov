// sinDeclarar = 22; // ReferenceError

// declaración
// var
// let y const
// NO ES HABITUAL
let fooDeclared;

// Declaración + asignación = inicialización
let foo = 23;

// Re-asignación

foo = 24;

// const
// Declaración + asignación = inicialización
const baz = 1.22;

// Re-asignación
// baz = 1.23; // TypeError: Assignment to constant variable.

// Objetos

const user = {
    name: 'Pepe',
    age: 22,
    isAlumno: true,
};

console.log(user);
console.log(user.name, typeof user.name);

user.age = 23;
user.surname = 'Pérez';
delete user.isAlumno;

console.log(user);

// Numbers

let n = Infinity;

let n1 = 3;
let n2 = '5';

console.log(n1 * n2); // coercion de string n2 a number
console.log(typeof n2); // string
console.log(n1 + n2); // 35 coercion de number n1 a string
console.log(n1 + Number(n2)); // 8

n2 = 'Pepe';
console.log(n1 * n2); // coercion de string n2 a number
// isNaN()
// Number.isNaN()

// Igualdades
n1 = 2;
n2 = '2';
if (n1 === n2) {
    console.log('Son iguales');
} else {
    console.log('Son distintos');
}

const response = n1 === n2 ? 'Son iguales' : 'Son distintos';
console.log(response);

const d = NaN;

if (d === NaN) {
} // false
if (0 === -0) {
} // true

// coercion / casting a boolean

//Falsies

console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Todo lo demás es truthy
console.log(Boolean('false'));
console.log(Boolean({}));
console.log(Boolean([]));

// Strings

let cad = 'Pepe';
cad = 'Pepe';
let template = `Hola ${cad}`;

//
function logicAnd(value1, value2) {
    return value1 && value2;
}

function logicOr(value1, value2) {
    return value1 || value2;
}

console.log(logicAnd(12, 23)); // 23
console.log(logicAnd(null, 23)); //null
console.log(logicOr(12, 23)); // 12
console.log(logicOr(null, 23)); // 23
