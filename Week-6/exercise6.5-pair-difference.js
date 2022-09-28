const pairDiff = (arr, diff) => {
    const set = new Set(arr)
    
    for(const element of arr) {
        if(set.has(diff + element)) {
            return 1;
        }
    }
    return 0;
}

//Time Complexity = O(n)
//Space Complexity = O(n)

console.log(pairDiff([5, 10, 3, 2, 50, 80], 78))