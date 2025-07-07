//  are patterns used to match character combination in strings. 
// in js , regex is implemented using regexp object or a literal syntax


// there are 2 ways by which we can create a regex
// const pattern = /abc/

// console.log(typeof pattern)
// console.log(pattern)

// 2. constructor notation
// const person = new RegExp('abc')
// console.log(person)

// common flags
// flag    meaning
// //    g        global search
// i              case insensitive search
// m              multiline search
// s              allows. to match newline
// u               unicode
// y               search at exact index

// methods
// test
// exec
// match
// search 
// replace 
// split


// common patterns
                        //   meaning
// .            any character
// \d           digit [0-9]
// D            not a digit
// w            word character(a-z,A-Z,0-9,_)
// W             non-word character
// s             whitespace(space,tab,newline)
// S             non-whitesapce // ^ 
// $             end of string
// [^...]        start of string 
// `(a  b)`      
// *             a* --> 0 or more a
// +             a+ --> 1 or more a
// ? 
// {n}           d{3} --> exactly 3 letter
// {n,}          d{2,4} 
// {n,m}


// question 1
// let regex = /^\d{10}$/
// contactNo = prompt("Enter contact number: ")
// if (regex.test(contactNo)){
//     alert("Number has been saved")
// }
// else{
//     alert("Invalid Number")
// }



// let regex = /^\w+@[a-zA-Z_]+?\.[a-z,A-Z]{2,3}$/

// console.log(regex.test("user123_@gmail.com"))
/*
/            start of regex
^            start of an string
\w+          one or more word character
@            literal @ symbol
[a-zA-Z_]+?   one or more chaARTERS or underscore (domain name), match domain 
\.   literal .
[a-zA-Z]{2,3}
$
/

*/
// ? match 0 or 1 of the characterbefore it
// let regex = /colou?r/

// console.log(regex.test("color"))
// console.log(regex.test("colour"))
// console.log(regex.test("colouur"))

// extract all number from strings
// w[a-zA-Z0-9_]
// let str = "price:30, discount:5, final:25"
// let numbers = str.match(/\w+/g)
// console.log(numbers)


// replace multiple spaces with single space

// const messy = "Too              Many           spaces!"
// let cleaned = messy.replace(/\s+/g," ")
// console.log(cleaned)


// check if a string starts with a "hello" (case-insensitive)

// let regex = /^hello/i

// console.log(regex.test("Hello world"))


// regex methods

// ther are 2 categories of methods 
// A. regex object methods
// test()   --> true/false .--> test if a pattern exist in a string
// exec()   --> array or null  --> executes a search and return match details


// B. string object method
/* 
1. match --> return an array of matches
2. replace  -->  replaces matched text
3. search  -->   return the index of the first match
4. split  -->    splits the string at each match of the regex


*/

// let regex = /\d+/g
// let result  = regex.exec("My age  is 45 45 66 32    and  years")
// console.log(result)



// let text = "Marks: 75, 80, and 95"
// let result = text.match(/\d+/g)
// console.log(result)


// search

// let text = "find where appears"
// let index = text.search(/\d+/)
// console.log(index)

// let text = "find where 100 appears"
// let csv = "red, green; blue orange"
// let result = csv.split(/[,; ]+/)
// console.log(result)

