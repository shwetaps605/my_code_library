
function partition(array,start,end) {
    const pivot = array[end];
    console.log("PIVOT ELEMENT", pivot)
    let pIndex = start;
    for(i=start;i<=end-1;i++) {
        if(array[i] < pivot) {
            const temp = array[i];
            array[i] = array[pIndex];
            array[pIndex]=temp;
            pIndex =  pIndex+1;
        }
    }
    const temp = array[end];
    array[end] = array[pIndex];
    array[pIndex] = temp;
    return pIndex;
}

function quickSort(array, start, end) {
    if(start >= end) return;
    const pIndex = partition(array,start,end);
    quickSort(array,start,pIndex-1);
    quickSort(array,pIndex+1,end);
   
}

let unsortedArray = [2,8,4,3,1,5]
quickSort(unsortedArray,0,unsortedArray.length-1);
console.log("SORTED",unsortedArray);
