// Question 1
// function reverseString(str){
//     let reversed = ""
//     console.log(str.length)
//     for (let i = str.length - 1; i >=0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(reverseString("hello"))


// console.log("hello".split("").reverse().join(''))

// nitin

// function isPallindrome(){

// }



// console.log("hello students".split(" "))


function longestWord(sentence){
    let word = "",longest = "";
    for (let i = 0; i <= sentence.length; i++){
        const char = sentence[i] || " ";
        if (char !== " " ){
            word += char;
        }
        else{
            if (word.length > longest.length) {
                longest = word
            }
            word = ""
        }
    }
    return longest
    
}
console.log(longestWord("hello students"))