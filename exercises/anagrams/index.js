// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 1

// function anagrams(strA, strB) {
//     const aCharMap = charMap(strA);
//     const bCharMap = charMap(strB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) { return false };

//     for (let key in aCharMap) {
//         if(aCharMap[key] !== bCharMap[key]) { return false };
//     };

//     return true;
// };

// function charMap(str) {
//     const charMap = {};
//     const newStr = str.replace(/[^\w]/, '').toLowerCase();

//     newStr.split('').map(char => {
//         !charMap[char] ? charMap[char] = 1 : charMap[char]++;
//     });

//     return charMap;
// }


// SOLUTION 1 Practice

// function anagrams(strA, strB) {
//     const aCharMap = charMap(strA);
//     const bCharMap = charMap(strB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) { return false };

//     for(let key in aCharMap) {
//         if(aCharMap[key] !== bCharMap[key]) { return false };
//     };

//     return true;
// };

// function charMap(str) {
//     const charMap = {};
//     const newStr = str.replace(/[^\w]/g, '').toLowerCase();

//     newStr.split('').map(char => {
//         !charMap[char] ? charMap[char] = 1 : charMap[char]++;
//     });

//     return charMap;
// };

// SOLUTION 2

function anagrams(strA, strB) {
    return cleanStr(strA) === cleanStr(strB);
};

function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
