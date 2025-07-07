// types of scopes in js

// global scope -- variables declared outside any function
// 
//  local scope block scope function scope
var num = 45

// function number(){
//     var num2 = 23
//     console.log(num2)
//     console.log(num)
  

// }
// number()


// console.log(num2)
// console.log(num)

// block scope --> introduced with let and const-- accessible with in only {} 

let a = 78

{
    // let a = 152

    {
        let b = 98
        console.log(a)
    }
}

// console.log(a)