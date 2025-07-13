//Reverse a String in JavaScript
function revereString(str){
    return str.split('').reverse().join('');
}

console.log(revereString("hello"));

//Question 2:
//Write a JavaScript function that checks whether a given string is a palindrome (reads the same forwards and backwards).

function palindrome(str){
    let a = str.split('').reverse().join('');
    return a === str;
}

 let ans = palindrome("madam");
 console.log(ans);

 // Write a JavaScript function that counts how many vowels (a, e, i, o, u) are in a given string.

 function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello")); 

//Find factorial using recursion


 
