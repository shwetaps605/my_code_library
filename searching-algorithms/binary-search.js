function recursiveBinarySearch(array,start,end,x) {
    if(start>end) return -1;
    const mid = start + (end-start)/2;
    if(array[mid] === x) return mid;
    else if(x < array[mid]) recursiveBinarySearch(array,start, mid-1,x);
    else recursiveBinarySearch(array,mid+1,end,x);
}

function iterativeBinarySearch(array,n,x) {
    let start = 0;
    let end = n-1;
    while(start <= end) {
        let mid = start + (end-start)/2;
        if(array[mid] === x) return mid;
        else if(x < array[mid]) end = mid -1;
        else start = mid+1;
    }
    return -1;
}

//Pre-requisite for binary search: Given array should be a sorted array

let num = 11;
let sortedArray = [1,4,6,8,11,17,24]
let found = iterativeBinarySearch(sortedArray,sortedArray.length,num);
console.log(`Iterative BS: ${found === -1 ? 'NOT FOUND': num + ' FOUND AT '+ found}`)

num = 28
found = iterativeBinarySearch(sortedArray,sortedArray.length,num);
console.log(`Recursive BS: ${found === -1 ? 'NOT FOUND': num + ' FOUND AT '+ found}`)