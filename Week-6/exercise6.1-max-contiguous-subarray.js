function maxContiguousSubArray(array) {
    let maxEndingHere = array[0]
    let maxSoFar = array[0]
    
    for(const num of array.slice(1)) {
        maxEndingHere = Math.max(maxEndingHere + num, num)
        maxSoFar = Math.max(maxEndingHere, maxSoFar)
    }
    return maxSoFar
}

//Time Complexity = O(n)
//Space Complexity = O(1)

let array = [1, 2, 3, 4, -10];
console.log(maxContiguousSubArray(array));