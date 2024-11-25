console.log('Pepe', typeof 'Pepe');
console.log(22, typeof 22);
console.log(2.2, typeof 2.2);
console.log(true, typeof true);
console.log(false, typeof false);
console.log(undefined, typeof undefined);
console.log(null, typeof null, 'error de typeof; el tipo es null');
console.log(Symbol(), typeof Symbol());
console.log(1n, typeof 1n);
console.log({}, typeof {});
console.log([], typeof []);
console.log(() => {}, typeof (() => {}));

// Lenguaje de tipado débil y dinámico
let foo;
console.log(foo, typeof foo);
foo = 'Pepe';
console.log(foo, typeof foo);
foo = 22;
console.log(foo, typeof foo);
foo = true;
console.log(foo, typeof foo);
foo = null;
console.log(foo, typeof foo, 'error de typeof; el tipo es null');
foo = Symbol();
console.log(foo, typeof foo);
foo = 1n;
console.log(foo, typeof foo);
foo = {};
console.log(foo, typeof foo);
foo = () => {};
console.log(foo, typeof foo);

// Tipado fuerte / estático (e.g. TypeScript)
// let baz: string
// baz = 'Pepe'
// baz = 22 daría un error
