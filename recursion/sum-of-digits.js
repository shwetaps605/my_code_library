
//give a number, return the sum of its digits
function sumOfDigits(n) {
    if(n == 0)
        return 0;
    return (n%10) + sumOfDigits(n/10);
}

const ans = sumOfDigits(1342)
console.log(ans)