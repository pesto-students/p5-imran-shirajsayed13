function spiralOrder(array) {
    let result = []
    let startRow = 0
    let endRow = array.length - 1
    let startCol = 0
    let endCol = array[0].length - 1

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col])
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol])
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            if (endRow > startRow) {
                result.push(array[endRow][col])
            }
        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (endCol > startCol) {
                result.push(array[row][startCol])
            }
        }

        startRow++
        endRow--
        startCol++
        endCol--
    }
    return result
}


let array = [[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],[ 9, 10, 11, 12 ],[ 13, 14, 15, 16 ]];
console.log(spiralOrder(array));