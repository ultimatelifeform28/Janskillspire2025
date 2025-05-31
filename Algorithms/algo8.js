//Square Array Values squareArrayVals(arr).
//  Square each value in a given array, returning that same array with changed values.
//  Given [1,2,3,4,5] return [1,4,9,16,25]

function squareArrayVals(arr) {
    return arr.map(x => x ** 2);
}

console.log(squareArrayVals([1,2,3,4,5]));


//Shift Array Values Left shiftArrayValsLeft(arr). 
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
//  Given [1,2,3,4,5] return [2,3,4,5,0]. 
// (You don't need to use the swap method for this one!)

function shiftArrayValsLeft(arr){
    arr.shift();
    arr.push(0);
    return arr;
}

console.log(shiftArrayValsLeft(1,2,3,4,5));