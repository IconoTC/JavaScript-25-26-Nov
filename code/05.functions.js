// declarar

function add(a = 0, b = 0) {
    const result = +a + +b;
    console.log('Arguments:', arguments);
    return result;
}

function addAnyNumbers() {
    console.log('Arguments:', arguments);
    let result = 0;
    for (const key in arguments) {
        const value = arguments[key];
        result += value;
    }
    return result;
}

const addAnyNumbersModern = (...data) => {
    let result = 0;
    for (const item of data) {
        result += item;
    }
    return result;
};

// asignación

const foo = {};

const subtraction = function (a, b) {
    return a - b;
};

// asignación de arrow function

const addArrow = (a, b) => {
    return a + b;
};

const addArrowShort = (a, b) => a + b;

// válido const square = a => a * a;

const result = add(2, 6);
console.log(result);

console.log(add());
console.log(add(2));
console.log(add(2, 6, 8, 4));

console.log(addAnyNumbers(2, 6, 8, 4));
console.log(addAnyNumbersModern(2, 6, 8, 4));
