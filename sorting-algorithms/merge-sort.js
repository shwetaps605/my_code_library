
function mergeArrays(arr1,arr2,array) {
    const l1 = arr1.length;
    const l2 = arr2.length;
    let i = 0;
    let j = 0;
    let k = 0;

    while(i<l1 && j<l2) {
        if(arr1[i] <= arr2[j]) {
            array[k] = arr1[i];
            i++;
        } else {
            array[k] = arr2[j];
            j++;
        }
        k++;
    }

    while(i<l1) {
        array[k] = arr1[i];
        k++;
        i++;
    }

    while(j<l2) {
        array[k] = arr2[j];
        k++;
        j++;
    }
}

function mergeSort(array) {
    const n = array.length;

    if(n<2)
        return array;

    const mid = Math.floor(n/2);
    console.log("MID VAL-->",mid)

    let arrayOne = new Array(mid);
    let arrayTwo = new Array(n-mid);

    

    for(i=0;i<mid-1;i++)
        console.log(`i=${i}`)
        arrayOne[i] = array[i];
    console.log("ARRAY ONE", arrayOne)
    for(j=mid;j<n-1;j++)
        console.log(`j=${j}`)
        arrayTwo[j-mid] = array[j];
    console.log("ARRAY TWO", arrayTwo)


    mergeSort(arrayOne);
    mergeSort(arrayTwo);
    mergeArrays(arrayOne,arrayTwo, array)
}


let unsortedArray = [2,8,4,3,1,5]
mergeSort(unsortedArray);
console.log("SORTED",unsortedArray)