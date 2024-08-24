
function insertionSortVer2(a,n) {
    for(i=1;i<=n-1;i++) {
        const current = a[i];
        let j = i ;
        while(j>=0 && a[j-1] > current) {
            a[j] = a[j-1];
            j =j-1;
        }
        //console.log(`\nswapping ${a[i]} and ${a[j]}}\n`);
        //const temp = 
        a[j]= current;
        //a[i] = a[j];
    }
}





function insertionSort(a,n) {
    for(i=1;i<=n-1;i++) {
        const current = a[i];
        let j = i -1;
        while(j>=0 && a[j] > current) {
            a[j+1] = a[j];
            j =j-1;
        }
        //console.log(`\nswapping ${a[i]} and ${a[j]}}\n`);
        //const temp = 
        a[j+1]= current;
        //a[i] = a[j];
    }
}

let unsortedArray = [2,8,4,3,1,5]
insertionSort(unsortedArray, unsortedArray.length);
console.log("SORTED",unsortedArray)
