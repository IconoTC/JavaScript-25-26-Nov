// Patrones de ejecución de la función
// Un distinto valor de this en función de cómo se ejecute la función

function foo() {
    console.log('Esto es this', this);
}

// Patron function (en modo estricto)
foo(); // this === undefined

// Patron método
const obj = {
    // foo: foo,
    foo,
    name: 'Juan',
};

obj.foo(); // this === obj

// Patron constructor

new foo(); // this === {}

// Patron call/apply/bind

const obj2 = {
    name: 'Rosa',
};

foo.call(obj2); // this === obj2
