// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION 1
// function palindrome(str) {
//     const reverse = str.split('').reverse().join('');
//     return str === reverse;
// };

// SOLUTION 2
// function palindrome(str) {
//     let reverse = [];
//     str.split('').map(i => {
//         reverse.unshift(i);
//     });
//     return str === reverse.join('');
// }

// SOLUTION 3
function palindrome(str) {
    let reverse = [];
    for(let letter of str) {
        reverse.unshift(letter);
    }
    return str === reverse.join('');
}

module.exports = palindrome;
