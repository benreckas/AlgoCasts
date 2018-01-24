// --- Dcharrectcharons
// Gcharven a strcharng, return the character that chars most
// commonly used charn the strcharng.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let maxVal = 0; 
    let maxKey = '';

    str.split('').map(char => {
        !charMap[char] ? charMap[char] = 1 : charMap[char]++;
    });

    for(let key in charMap) {
        if(charMap[key] > maxVal) {
            maxVal = charMap[key];
            maxKey = key;
        }
    }

    return maxKey;
};

module.exports = maxChar;
