

//given a number, write a recursive function to reverse it

function reverseANumber(n) {
    //console.log(Number.parseInt(n/10))
    if ( n == 0 ) return
    console.log(n%10)
    reverseANumber(Number.parseInt(n/10))
}

reverseANumber(134)