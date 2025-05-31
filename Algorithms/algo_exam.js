// 1.Print 1-255 print1To255(). Print all the integers from 1 to 255.
function print1To255() {
    for (let i = 1; i <= 255; i++) {
      console.log(i);
}
  
  
print1To255();

// 2.Print Ints and Sum 0-255 printIntsAndSum0To255(). Print integers from 0 to 255, and with each integer print the sum so far. 
function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
      sum += i;
      console.log(`Integer: ${i}, Sum: ${sum}`);
    }
  }

  printIntsAndSum0To255();

// 3. Print Odds 1-255 printOdds1To255(). Print all odd integers from 1 to 255.
function printOdds1To255() {
    for (let i = 1; i <= 255; i += 2) {
      console.log(i);
    }
  }

  printOdds1To255();

// 4.Print Array Values printArrayVals(arr). Iterate through a given array, printing each value.
function printArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArrayVals([1, 2, 3, 4, 5]); 

// 5.Return Odds Array 1-255 returnOddsArray1To255(). Create and return an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1To255() {
    let oddArray = [];
    for (let i = 1; i <= 255; i += 2) {
      oddArray.push(i);
    }
    return oddArray;
  }
  
  
  console.log(returnOddsArray1To255());

// 6.Print Max of Array printMaxOfArray(arr). Given an array, find and print its largest element.
function printMaxOfArray(arr) {
    if (arr.length === 0) {
      console.log("The array is empty.");
      return;
    }
  
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log(`The largest element in the array is: ${max}`);
  }
  
  
  printMaxOfArray([1, 5, 6, 9, 2]);


// 7.Print Average of Array printAverageOfArray(arr). Analyze an array’s values and print the average.
function printAverageOfArray(arr) {
    if (arr.length === 0) { 
        console.log("The array is empty.");
        return;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(`The average of the array is: ${average}`);
}

printAverageOfArray([1, 2, 3, 4, 5]); 

// 8.Print Max, Min, Average Array Values printMaxMinAverageArrayVals(arr).
//  Given an array, print the max, min and average values for that array.
if (arr.length === 0) {
    console.log("The array is empty.");
    return;
}

let max = arr[0]; // Initialize max with the first element
let min = arr[0]; // Initialize min with the first element
let sum = 0;      // Initialize sum to 0

// Iterate through the array
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]; // Update max if current element is greater
    }
    if (arr[i] < min) {
        min = arr[i]; // Update min if current element is smaller
    }
    sum += arr[i]; // Add current element to sum
}

// Calculate the average
const average = sum / arr.length;

// Print the results
console.log(`Max: ${max}, Min: ${min}, Average: ${average}`);
}

// Test the function with an example array
printMaxMinAverageArrayVals([1, 2, 3, 4, 5]);

// 9.Return Array Count Greater than Y returnArrayCountGreaterThanY(arr, y).
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
    let count = 0; // Initialize count to 0

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++; 
        }
    }

    console.log(`Number of values greater than ${y}: ${count}`);
    return count; 
}

// Test the function with an example array
returnArrayCountGreaterThanY([1, 2, 3, 4, 5], 3); 

// 10.Swap String for Array Negative Values swapStringForArrayNegativeVals(arr).
// Given  an array of numbers, replace any negative values with the string 'Skillspire'.
function swapStringForArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Skillspire'; // Replace negative value with 'Skillspire'
        }
    }
    return arr; // Return the modified array
}

print(swapStringForArrayNegativeVals([1, -2, 3, -4, 5])); 

// 11.Square Array Values squareArrayVals(arr). Square each value in a given array, returning that same array with changed values.
// 4 Given [1,2,3,4,5] return [1,4,9,16,25]

function squareArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]; 
    }
    return arr; 
}

print(squareArrayVals([1, 2, 3, 4, 5]));

// 12.Shift Array Values Left shiftArrayValsLeft(arr). 
// Given an array, move all values forward (to the left) by one index, 
// dropping the first value and leaving a 0 (zero) value at the end of the array. Given [1,2,3,4,5] return [2,3,4,5,0]

function shiftArrayValsLeft(arr) {
    if (arr.length === 0) {
        return arr; // Return the array if it's empty
    }

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]; 
    }
    arr[arr.length - 1] = 0; 

    return arr; 
}

print(shiftArrayValsLeft([1, 2, 3, 4, 5]));

// 13. Given an array with only 2 values. Swap the places of those 2 values and return the altered array. Given [1,2] return [2,1]

function​swapArrayVals(arr) {
    if (arr.length !== 2) {
        console.log("Array must have exactly 2 elements.");
        return arr; 
    }

    let temp = arr[0]; // Store the first value in a temporary variable
    arr[0] = arr[1]; // Assign the second value to the first position
    arr[1] = temp; // Assign the temporary value to the second position

    return arr; 
}

print(swapArrayVals([1, 2]));

// 14. Array swap pairs. Swap positions of successive pairs of values of a given array.
//  If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        let temp = arr[i]; // Store the first value in a temporary variable
        arr[i] = arr[i + 1]; // Assign the second value to the first position
        arr[i + 1] = temp; // Assign the temporary value to the second position
    }
    return arr; 
}

  
  console.log(swapPairs([1, 2, 3, 4])); 
  console.log(swapPairs(["Brendan", true, 42])); 

