// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let regex = /[^\w]/g;
    let cleanA = stringA.replace(regex, "").toLowerCase().split('').sort();
    let cleanB = stringB.replace(regex, "").toLowerCase().split('').sort();
    
    if (cleanA.length !== cleanB.length){
        return false;
    } else {
        let mapA = {};
        let mapB = {};

        for (const char of cleanA) {
            if(mapA[char] == undefined){
                mapA[char] = 1
            } else {
                mapA[char] += 1
            }
        }
        for (const char of cleanB) {
            if (mapB[char] == undefined) {
                mapB[char] = 1
            } else {
                mapB[char] += 1
            }
        }
        if (JSON.stringify(mapA) === JSON.stringify(mapB)){
            return true;
        } else {
            return false;
        }
        
    }
}


module.exports = anagrams;
