const arr = [1,5,1,4];
const hasDuplicate = arr => new Set(arr).size != arr.length;
console.log(hasDuplicate(arr));
