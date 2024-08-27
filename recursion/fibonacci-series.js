//program to find the nth number in the fibonacci series using recursion

function findFibonacci(n) {
    if(n<2) return n;
    return findFibonacci(n-1)+findFibonacci(n-2);
}

const input = 6
let val = findFibonacci(input)
console.log(`${input}th fibonacci number is ${val}`)