/*
    2520 is the smallest number that can be divided by each of the numbers
    from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of
    the numbers from 1 to 20?
 */

const max = 20;
let val = max;

while (val++) {
    let valid = true;
    if (val % 1000000 === 0) {
        console.log('checking', val);
    }
    for (let i = 1; i <= max; i++) {
        if (val % i !== 0) {
            valid = false;
        }
    }
    if (valid) {
        break;
    }
}

console.log(val);
// Answer: 232792560
