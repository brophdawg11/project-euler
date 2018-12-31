/*
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
    that the 6th prime is 13.

    What is the 10001st prime number?
*/

const { isPrime }= require('./utils');

const primes = [];
let i = 0;

while (++i && primes.length <= 10001) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

console.log(primes[primes.length - 1]);
// Answer: 104743
