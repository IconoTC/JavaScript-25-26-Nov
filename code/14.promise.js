function makeAsyncPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = Math.random();
            if (n < 0.5) {
                reject(new Error('Error ' + n));
            }
            resolve('Data ' + n);
        }, 1000);
    });
}

makeAsyncPromise()
    .then((data) => {
        console.log(data);
        return makeAsyncPromise();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message);
    });
