//Count Non-Spaces. Create a function that accepts a string and returns the number of 
//non-space characters found in the string. For example, given ”lol cool dude", return 11 (not 13).​

// 1. Create a function that accepts a string as a parameter
function countNonSpaces(str){
// 2. Create a variable called count and set it equal to 0
let cont = 0;
// 3. Create a for loop that starts at 0 and end string.length
for(let i = 0; i < str.length; i++){
// 4. Inside the loop check if the current character is not a space
if(str[i] !== " "){
// 5. If it is not a space increment count
count++
    }
}
// 6. Return count
return count;
}

console.log(countNonSpaces("lol cool dude"));
//Output: 11

//Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string ” remove    spaces ", return ”removespaces”.

// 1. Create a function that accepts a string as a parameter
function removeSpaces(str){
// 2. Create a variable called newStr and set it equal to an empty string
let newStr = "";
// 3. Create a for loop that starts at 0 and end string.length
for(let i = 0; i < str.length; i++){
// 4. Inside the loop check if the current character is not a space
if(str[i] !== " "){
// 5. If it is not a space add it to newStr
newStr += str[i];
    }
}
// 6. Return newStr
return newStr;
}

console.log(removeSpaces(" remove    spaces "));
//Output: removespaces