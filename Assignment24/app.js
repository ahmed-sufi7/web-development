// const arr = [1,23,12,43,13,5,6,3,78];
// const num = 12;

// function getElements(arr, num) {
//     for (let i = 0; i < arr.length; i++ ) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr, num);



// let str = "abcdabcdefgggh";

// function getUnique(str) {
//     let ans = "";
//     for (let i = 0; i<str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// getUnique(str);




// let country = ["Australia","Germany","United States of America"];


// function longestName(country) {
//     let ansIdx = 0;
//     for (let i = 0; i<country.length; i++) {
//         let ansLen= country[ansIdx].length;
//         let currLen = country[i].length;
//         if (currLen>ansLen) {
//             ansIdx = i
//         }
//     }
//     return country[ansIdx];
// }



// longestName(country);



// let vowels = ['a','e','i','o','u'];
// let str = "abcdefiiiu";

// function countVowel() {
//     let count = 0;
//     for (let i = 0; i<str.length; i++) {
//         if (str.indexOf(vowels[i]) != -1){
//             count++;
//         }
//     }
//     return count;

// }

// countVowel();


// let str = "abcdefiiiu";

// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i<str.length; i++){
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i'|| str[i] == 'o'|| str[i] == 'u') {
//             count++;
//         }
//     }
//     return count;
// }


// countVowels(str);

let start = 50;
let end =  100;

function getRandom(start,end) {
    let diff = end - start;
    return Math.floor(Math.random() *diff) + start;
}

getRandom(start,end);