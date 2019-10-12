// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function cleanInput(str){
    let regex = /[^\w]/g;
    return str.replace(regex, "").toLowerCase().split('').sort();
}

function toMap(str){
    let map = {};
    for (const char of str) {
        if (map[char] == undefined) {
            map[char] = 1
        } else {
            map[char] += 1
        }
    }
    return map
}


function anagrams(stringA, stringB) {
    const cleanA = cleanInput(stringA);
    const cleanB = cleanInput(stringB);

    if (cleanA.length !== cleanB.length) {
        return false;
    } else {
        const mapA = toMap(cleanA);
        const mapB = toMap(cleanB);
        return JSON.stringify(mapA) === JSON.stringify(mapB) ? true : false;
    }
}


module.exports = anagrams;
