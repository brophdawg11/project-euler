/*
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

    Find the sum of all the primes below two million.
 */

const { primesLessThan, sum } = require('./utils');

const primes = primesLessThan(2000000);

console.log(sum(primes));
// Answer: 142913828922
