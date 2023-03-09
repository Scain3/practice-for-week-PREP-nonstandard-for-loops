function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArr = []
    for(let i = 1; i < arr.length; i+=2){
        newArr.push(arr[i])
    }
    //console.log(arr, newArr);
    return newArr;
}

//console.log(oddIndices([1,2,3,4]))

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr = []
    for(let i = arr.length-1; i >= 0; i--){
        if(i % 2 !== 0){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
//console.log(oddReverse([1,2,3,4]))

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let logNum = Math.log2(i);
        if(Number.isInteger(logNum)) newArr.push(arr[i])
    }
    return newArr;
}

console.log(secondPower([1, 7, 6, 61, 53, 48, 91]))

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
