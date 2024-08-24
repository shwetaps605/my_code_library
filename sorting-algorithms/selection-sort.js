
function selectionSort(array, n) {
    console.log("UNSORTED",array)
    console.log('length of array',n)
    for(i=0; i<n-1; i++){
        let iMin = i;
        for(j=i+1; j<=n-1;j++) {
            if(array[j] < array[iMin])
            {
                iMin = j
            }
        }
        console.log(`\nswapping ${array[i]} and ${array[iMin]}}\n`);
        const temp = array[i];
        array[i] = array[iMin];
        array[iMin] = temp;
        console.log('AFTER SWAP-->',array)
    }
}

let unsortedArray = [2,8,4,3,1,5]
selectionSort(unsortedArray, unsortedArray.length);
console.log("SORTED",unsortedArray)
