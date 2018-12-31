/*
    A palindromic number reads the same both ways. The largest palindrome made
    from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.
*/

const { isPalindrome, max } = require('./utils');

let i = j = 999;
const palindromes = [];

for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
        const product = i * j;
        if (isPalendrome(product)) {
            palindromes.push(product);
        }
    }
}

console.log(max(palindromes));
// Answer: 906609
