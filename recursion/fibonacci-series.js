//program to find the nth number in the fibonacci series using recursion

function findFibonacci(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    let a = findFibonacci(n-1)
    let b = findFibonacci(n-2)
    return a+b;
}

const input = 5
let val = findFibonacci(input)
console.log(`${input}th fibonacci number is ${val}`)