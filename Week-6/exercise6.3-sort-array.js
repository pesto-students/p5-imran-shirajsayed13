function sortArray012(arr) {
    let countZero = 0, countOne = 0, countTwo = 0;
    for (const element of arr) {
        if(element == 0) countZero+=1
        if(element == 1) countOne+=1
        if(element == 2) countTwo+=1
    }
    
    let i = 0
    while (countZero != 0) {
        arr[i] = 0
        i++
        countZero--
    }
    while(countOne != 0) {
        arr[i] = 1
        i++
        countOne--
    }
    while(countTwo != 0) {
        arr[i] = 2
        i++
        countTwo--
    }
    console.log(arr)
}

sortArray012([0, 2, 1, 2, 0])

// Time complexity = O(n)
// Space complexity = O(1)