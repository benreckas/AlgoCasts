// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
function reverse(str) {
    return str.split('').reverse().join('');
};

// SOLUTION 2
// function reverse(str) {
//     let newStr = [];
//     str.split('').map(i => {
//         newStr.unshift(i);
//     });
//     return newStr.join('');
// }

// SOLUTION 3
// function reverse(str) {
//     let newStr = [];
//     for(let letter of str) {
//         newStr.unshift(letter);
//     }
//     return newStr.join('');
// }

module.exports = reverse;
