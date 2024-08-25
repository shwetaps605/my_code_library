
function mergeArraysVersion2 (left,right) {
    let sortedArray = [];
    while(left?.length && right?.length) {
        if(left[0] < right[0]) {
            console.log('left is smaller so after shift left-->',left)
            sortedArray.push(left.shift())
        } else {
            console.log('right is smaller so after shift right-->',right)
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}


function mergeArrays(arr1,arr2,array) {
    const l1 = arr1?.length;
    const l2 = arr2?.length;
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

    let arrayOne = array.slice(0,mid);
    let arrayTwo = array.slice(mid);

    // for(i=0;i<mid-1;i++)
    //     console.log(`i=${i}`)
    //     arrayOne[i] = array[i];
    console.log("ARRAY ONE", arrayOne)
    // for(j=mid;j<n-1;j++)
    //     console.log(`j=${j}`)
    //     arrayTwo[j-mid] = array[j];
    console.log("ARRAY TWO", arrayTwo)


    let left = mergeSort(arrayOne);
    let right = mergeSort(arrayTwo);
    const sorted = mergeArraysVersion2(left,right)
    return sorted;
}


let unsortedArray = [66,34,12,54,6,45,99,25,10,2,0,38]
const sortedArray = mergeSort(unsortedArray)
console.log("SORTED",sortedArray);


//console.log(mergeArraysVersion2([1, 4], [2, 6, 9]));

