function replaceNegativeswithOne(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 1;
        }
    }
    return arr;
}

const input = [1, 2, 3, -1, -2, -3];  // returns [1, 2, 3, 1, 1, 1]
console.log(replaceNegativeswithOne(input));

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('strings')); // returns 'sgnirts'