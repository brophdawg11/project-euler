/*
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the number 600851475143?
 */

const { isPrime } = require('./utils');

const VAL = 600851475143;

let start;
let i = 0;

for (let i = 2; i > 0; i++) {
    if (VAL % i === 0) {
        start = Math.round(VAL / i);
        break;
    }
}

console.log(`starting at ${start} x ${i} = ${VAL}`);

const HALF = 300425737571;

for (i = start; i > 0; i--) {
    if (i % 100000000 === 0) {
        console.log(`checking ${i}`);
    }
    if (i % 2 === 0) {
        // Even numbers won't go into our number
        continue;
    }
    if (VAL % i === 0) {
        console.log(`found factor ${i}`);
        if (isPrime(i)) {
            console.log(`answer ${i}`);
            i = 0;
        }
    }
}

// Answer: 6857
