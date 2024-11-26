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

// Una IIFE de carácter async incluyendo los await

// (async () => {
//     try {
//         let data = await makeAsyncPromise();
//         console.log(data);
//         data = await makeAsyncPromise();
//         console.log(data);
//     } catch (error) {
//         console.error(error.message);
//     }
// })();

try {
    let data = await makeAsyncPromise();
    console.log(data);
    data = await makeAsyncPromise();
    console.log(data);
} catch (error) {
    console.error(error.message);
}

Promise.allSettled([
    makeAsyncPromise(),
    makeAsyncPromise(),
    makeAsyncPromise(),
    makeAsyncPromise(),
    makeAsyncPromise(),
]).then((results) => {
    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log(result.value);
        } else {
            console.error(result.reason.message);
        }
    });
});
