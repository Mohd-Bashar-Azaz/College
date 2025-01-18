// program-7: to test the first character of a string is uppercase or not)

function isUpperCase(str) {
    return str.length > 0 && str[0] === str[0].toUpperCase();
}
// Example usage:
const str1 = "Helo";
const str2 = "world";
const str3 = "";
console.log(isUpperCase(str1)); // Output: true
console.log(isUpperCase(str2)); // Output: false
console.log(isUpperCase(str3)); // Output: false
