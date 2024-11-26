// La funciones pueden tener propiedades

const foo = function () {
    console.log('Soy foo');

    const internal = () => {
        console.log('Soy internal');
    };

    internal();
};
foo.type = 'básico';
console.log(foo);
console.log(foo.hasOwnProperty('type'));
foo.baz = () => {};

foo();
foo.baz();

// High Order Functions
// - reciben como parámetro un función (= callback)
// - retornan una función

function hofMakeSomething(callback) {
    callback();
}

hofMakeSomething(() => console.log('Primer ejemplo'));
hofMakeSomething(() => console.log('Segundo ejemplo'));

const sampleCallback = () => {
    return console.log('Soy un callback');
};

hofMakeSomething(sampleCallback);

function hofReturnCalcule(isAdd = true) {
    function first(a, b) {
        return a + b;
    }

    function second(a, b) {
        return a * b;
    }

    return isAdd ? first : second;
}

const add = hofReturnCalcule(true);
const prod = hofReturnCalcule(false);

console.log(add(2, 4));
console.log(prod(2, 4));

console.log(hofReturnCalcule(true)(45, 10));

// Closures

function createCounter() {
    let value = 0;
    function increase() {
        value++;
    }
    function decrease() {
        value--;
    }

    function showValue() {
        console.log(value);
    }

    return {
        increase,
        decrease,
        showValue,
    };
}

const counter1 = createCounter();
const counter2 = createCounter();
counter1.increase();
counter2.decrease();
counter1.showValue();
counter2.showValue();
