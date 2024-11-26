function makeAsync(callback) {
    setTimeout(() => {
        const n = Math.random();
        callback(n);
    }, 1000);
}

// console.log('Tarea 1');
// setTimeout(() => {
//     console.log('Tarea 2');
// }, 0);
// console.log('Tarea 3');

makeAsync((n) => {
    console.log(Math.trunc(n * 10));
});

// const xhr = new XMLHttpRequest();
// xhr('https://jsonplaceholder.typicode.com/users', (data) => {
//     console.log(data);
// });
