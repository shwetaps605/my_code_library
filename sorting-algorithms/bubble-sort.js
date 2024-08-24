

function bubbleSort(array,n) {
    for(k=0; k<n-1;k++) {
        for(i=0;i<=n-2-k;i++) {
            if(array[i]>array[i+1]){
                console.log(`\nswapping ${array[i]} and ${array[i+1]}}\n`);
                const temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
    }
}

let unsortedArray = [2,8,4,3,1,5]
bubbleSort(unsortedArray, unsortedArray.length);
console.log("SORTED",unsortedArray)
