export function totalSum(data) {
    let accumulator = 0;
    for (const item of data) {
        // accumulator = accumulator + item
        accumulator += item;
    }

    return accumulator;
}
