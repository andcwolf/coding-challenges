/*
1. You will be given a number n. Print all numbers from 1 to n, inclusive.
Precondition: n > 0, and n will be an integer.
*/

function printNumbersUntil(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

/*
2. You will be given a number n. Print all EVEN numbers from 1 to n, inclusive.
Precondition: n > 0, and n will be an integer.
*/

function printEvenNumbersUntil(n) {
    for (let i = 2; i <= n; i = i + 2) {
        console.log(i);
    }
}

/*
3.  You will be given a number n. 
    If n is positive, Print all numbers from 1 to n, inclusive.
    If n is negative, Print all numbers from -1 to n, inclusive.
    If n is zero, print nothing
*/

function printNumbersUntilWithNegative(n) {
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    } else if (n < 0) {
        for (let i = -1; i >= n; i--) {
            console.log(i);
        }
    }
}

/*
4. Return the sum of all numbers from 1 to n, inclusive.
Precondition: n > 0, and n will be an integer.
*/

function sumOfNumbersUpto(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/*
5. Write a program that prints the numbers from 1 to 100. 
    But for multiples of three console.log “Fizz” instead of the number and for the multiples of five print “Buzz”. 
    For numbers which are multiples of both three and five console.log “FizzBuzz”.
*/

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

export {
    printNumbersUntil,
    printEvenNumbersUntil,
    printNumbersUntilWithNegative,
    sumOfNumbersUpto,
    fizzBuzz,
};
