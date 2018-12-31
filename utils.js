function getArgsArray(args) {
    return Array.isArray(args[0]) ? args[0] : args;
}

const utils = {
    add(a, b) {
        return a + b;
    },

    isPalindrome(val) {
        return parseInt(val.toString().split('').reverse().join(''), 10) === val;
    },

    isPrime(n) {
        if (n <= 1) {
            return false;
        }
        if (n === 2) {
            return true;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    },

    max(...args) {
        let arr = getArgsArray(args);
        return arr.reduce((acc, val) => val > acc ? val : acc, 0);
    },

    primesLessThan(max) {
        const primes = [];
        for (let i = 2; i < max; i++) {
            if (utils.isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    },

    product(...args) {
        let arr = getArgsArray(args);
        return arr.reduce((acc, val) => acc *= val, 1);
    },

    range(max) {
        const range = [...Array(max + 1).keys()];
        range.shift(); // Remove leading 0
        return range;
    },

    sum(...args) {
        let arr = getArgsArray(args);
        return arr.reduce((acc, val) => acc += val, 0);
    },
};

module.exports = utils;
