

function stableQuickSort(array) {
    if(array.length <= 1) return array;
    let mid = Math.floor(array.length/2);
    //taking the middle element as mid instead of the last element
    const pivot = array[mid];

    let leftArray = [];
    let rightArray = [];

    for(i=0;i<=array.length-1;i++) {
        if(i !== mid) {
            if(array[i] < pivot) {
                leftArray.push(array[i])
            } 
            else if (array[i] > pivot) {
                rightArray.push(array[i])
            }
            else {
                if(i <  mid) leftArray.push(array[i])
                else rightArray.push(array[i])
            }
        }
    }

    const sortedLeft = stableQuickSort(leftArray);
    const sortedRight = stableQuickSort(rightArray);

    return [...sortedLeft,pivot,...sortedRight]
}

let unsortedArray = [2,8,4,3,1,5]
console.log("SORTED",stableQuickSort(unsortedArray));
