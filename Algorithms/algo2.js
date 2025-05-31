// Create a function that accepts a string and returns that string but reversed.
//  Example: Given "string"  return "gnirts

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("string")); // gnirts

//Given an string create a function that checks to see if a string is a palindrome.
//  A palindrome is a word that is spelled the same forward and backwards like “racecar”, “mom”, and “dad”.Hint: Reference the reverse string algorithm.

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("dad")); // true