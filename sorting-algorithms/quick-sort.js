function randomPartition(array,start,end) {
    const random = Math.floor(Math.random() * (end - start +1 )) + start;
    [array[end], array[random]] = [array[random],array[end]]
    return partition(array,start,end);
}

function partition(array,start,end) {
    const pivot = array[end];
    let pIndex = start;
    for(i=start;i<=end-1;i++) {
        if(array[i] < pivot) {
            [ array[i],array[pIndex]] = [ array[pIndex],array[i]]
            pIndex++;
        }
    }
    [array[end],array[pIndex]]= [array[pIndex],array[end]]   
    return pIndex;
}

function quickSort(array, start, end) {
    if(start >= end) return;
    const pIndex = randomPartition(array,start,end);
    quickSort(array,start,pIndex-1);
    quickSort(array,pIndex+1,end);
}

let unsortedArray = [2,8,4,3,1,5]
quickSort(unsortedArray,0,unsortedArray.length-1);
console.log("SORTED",unsortedArray);
