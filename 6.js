/*
    The sum of the squares of the first ten natural numbers is,

      1^2 + 2^2 + ... + 10^2 = 385

    The square of the sum of the first ten natural numbers is,

      (1 + 2 + ... + 10)^2 = 55^2 = 3025

    Hence the difference between the sum of the squares of the first ten natural
    numbers and the square of the sum is 3025 − 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred
    natural numbers and the square of the sum.
 */

const { range } = require('./utils');

const range100 = range(100);

const sumOfSquares = range100.reduce((acc, val) => acc += val * val, 0);
const sum = range100.reduce((acc, val) => acc += val, 0);
const squareOfSums = sum * sum;

console.log(Math.abs(squareOfSums - sumOfSquares));
// Answer: 25164150
