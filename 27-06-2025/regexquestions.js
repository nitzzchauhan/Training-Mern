// q.1
// q.2 
// q-3 

// let postalCode = 20130
// let postalRegex = /^\d{5}$/
// console.log(postalRegex.test(postalCode))


// q.4 (6-9, 10digits)

// const contactNumber = "6767676727"
// const verifyNumber = /^[6-9]\d{9}$/
// console.log(verifyNumber.test(contactNumber))

// 5 password contain one upper case , one lower case one digit
// lookheads  --> 
// 1. Positive look head  (?=) --> look for matches   
// 2. negative lookhead(?!) --> looks for no match
// let password = "Abc23"
// let  passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
// console.log(passPattern.test(password))


// . matches any character
// * 0 or more
//   
//  6. "HELLO" 


// 7. .COM

// 8. FIND all words that star with a capital letter

// let sentence = "Keshav went to Noida2 with Satwik"

// let capSentence = /\b[A-Z][a-z0-9]+\b/g

// console.log(sentence.match(capSentence))

// 9. replace multiple spaces with single space


// let manySpaceSentence = "       This       is     a      Sentence    "
// let clean = manySpaceSentence.replace(/\s+/g," ")
// console.log(clean)

// let clean  = manySpaceSentence.replace(/^\s+|\s+$/,"")
// console.log(clean.replace(/\s+/g," "))

// 10. check if a string is a valid date in dd-mm-yyyy














// 0-9    
// 10-29  
// 30,31  
let date = "27-06-2025"
let dateRegex = /^(0[1-9]|[1-2][0-9]|3[0,1])-([0][1-9]|1[0-2]])-(\d{4})$/
console.log(dateRegex.test(date))




// 0 1 2 3 4 5 6 7 8 9 10 11 12 . . . 20 21 22 . . 30 31

// /^0[1-9]|[1,2][0-9]|3[0,1]/

// /^0[1-9]|1[0,9]|2[0,9]|3[0,1]/
//  [1,2][0-9]





