// es6 --> ecmascript 6  -> 2015 , ecmascript 2016
// re;ased major updates. making it morepower and claner to write

// let and const --> block scoped{}
// global scope
// var a = 45
// {
//     var a = 12
//     {
//         {
//             var a = 56
//         }
//     }
// }
// let a = 45
// {
//     let a = 12
//     console.log(a)
//     {
//         {
//             let a = 56
//         }
//     }
// }
// console.log(a)

// arrow function 
// ()=>{} shorter syntax
// doesnt have its own this(inherits from parent)

// template literals --> ``

// default paramenters


// destructuring 
// array destructring
// problem
// let arr1 = [45,89]

// let a = arr1[0]
// let b = arr1[1]
// console.log(a,b)

// solution by destructring

// let [a,b] = [45,89]
// console.log(a,b)

// object destructring

// const emp1 = {
//     name: "Jay Prakash",
//     location:"Bglr"
// }
// const name = emp1.name
// const location = emp1.location

// solution

// const emp1 = {
//     name: "Jay Prakash",
//     location:"Bglr"
// }

// const { name, location } = {
//     name: "Jay Prakash",
//     location: "Bglr"
// }
// console.log(name)

// rest and spread operator
// let arr1 = [78,56,23,78,99,22]
// let arr2 = [1,2]
// // console.log(arr1)

// console.log([...arr1,...arr2])

// function add(a,b,c,){
//    console.log(a+b+c)    
// }
// let arr1 = [22,11,13]
// add(...arr1)

// let arr1 = [1,2]
// // let arr2 = [...arr1]
// console.log([0,...arr1,3])

// let emp1 = {
//     name:"satwik",
//     office:"Noida",
// }

// console.log({...emp1,course:"mern"})

// rest

// function sum(first, ...x) {
//     console.log(first)
//     console.log(x)
// }
// sum(1, 2, 3, 45, 6, 89)

// const [a,b,...c] =[1, 2, 3, 45, 6, 89]
// console.log(a,b,c)

//enhanced object literal

// let name = "Nitin"

// let user = {
//     name,    //name:name
//     age:78
// }
// console.log(user.name)
// prompt = name = nitin


// const username = prompt("Enter your Name")

// let user = {
//     username:username,  
//     age:"26"
// }


// classes

// promises


// modules

// set

let set = new Set([1,2,2,2,3,4,4,5,5,6,6])
// console.log(set)

// ordered nhi hai

// map --> key-value pair 

// let map = new Map()
// map.set(()=>{},"nitin")
// console.log(map.get("()=>{}"))

// for of

// symbol
// object.assign

// Object.assign({},obj1,obj2,obj3)

// array method --> includes
// find(), findindex(),from(), includes(),
// string methods --> startwith etc...