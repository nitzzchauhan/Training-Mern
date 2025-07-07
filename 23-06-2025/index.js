// js comment
// 
// helo world

/* 
fdmklfmdsl
mfkldsnfkldsnl
fmkldsfnklds
nkjdsbfjkds
*/

// data types

// js has two categories of dt
//  primitve (store single value)  --- non-primitive(multiple valuedata)


// --> primitive (immutable)

// NUmber string boolean undefined null bigint 2^53 - 1 symbol


// non - primitive (store multiple value ) --> references types 

// object array



// console.log(typeof Symbol('id'))

// name = "nitin"
// age= 32
// location = "delhi"

// arr1 = ["nitin",31,true]

// object

// obj1 = {
//     name:"kartik",
//     age:12,
//     isIndian :true

// }

// console.log(obj1.name)




// object


// console.log({
//     name: "nitin",
//     age: 26,
//     location: "bhutan"


// })

// [value1,value2,value3]
// ["banana","pineapple","cherry"]
// {
//     key1:value1,
//     key2:value2
// }


// variable declaration
// let var const

// age  = 26

// age  = 42

// console.log(age)

// var age = 78
// age = 12

// var age  = "i am age"
// console.log(age)

// let age
// age = 12

// let age 
// console.log(age)
// var name  = 78

// const name = 78 
// console.log(name)


// var email = "email@email.com"

// type conversion 

var age  = "42"
// console.log(typeof age)

// // Number(age)

// console.log(typeof Number(age))


// // implcit and explicit

// console.log("5" + 2) // number to string
// console.log("5" - 2) // string to numbr

// console.log(true+1)
// console.log("nitin" + " " + "chauhan")

// console.log(parseInt())


// console.log(Boolean(" "))


// console.log(parseInt("53PXMKLMKLML"))


// Number() 
// Boolean("dfgdfg")
// String()
// add()



// array
// collecttion of data 2. ordered 3 zero based indexed



// ["lemon","apple","cherry"]

// let shoppingList = ["fruits", "groceries"]
// delete shoppingList[0]
// console.log(shoppingList)

// console.log(shoppingList[0])

// methods
// shoppingList.push()
// shoppingList.push("clothing")
// shoppingList.unshift("item1")
// shoppingList.splice(0,1)

// shift()
// unshift()
// splice
// console.log(shoppingList)
// 




// map()
// filter()
// reduce()

// let person1 ={
//     name: "Satwik",
//     age:22,
//     isEmployee :true
// }
// access an item in an object
// console.log(person1.name)
// console.log(person1["name"])

// person1.name = "Ravi"

// console.log(person1)


// loops in javascript
// loops allow us ton execute block of code multiple time either by a fixed or while a certain conidtion is true
// loops

// {

//   statement 1
//   statement 2
//   statement 3
//   statement 4

// }

// for loop (used when number of iteration is know) and 
// for in loop
// for of loop
// foreach
// map
// reduce
//  filter
// 
// while loop (when the number of iteration are unknown)

// three loop statement
//  break continue


// // for loop
// for (initialisation,condition, update){

// }


// for (let i = 1;i<=5; i++){
//     console.log("iteration:",i)
// }

// while (condition){

// }

// while (true){
//     console.log(1)
//     }

// var  i = 0

// while (i<5){
//     console.log("iteration",i)
//     i++
// }

//  do while loop

// do { } while (condition)

// score = 10

// do {
//     console.log(score)
//     score ++
// }
// while (score < 15)

// for in loop
//  iterates over enumerable keys of an object


// for (let key in obj1){
//     console.log(key, obj1[key])    
// }

marksList = [1,2,3,4,5,6,7]

// obj1 = {
//     name:"Jagdish",
//     age:22,
//     course:"MERN"
// }

// for (const element in marksList) {
//        console.log(element)
// }


// .break and continue

// result  = marksList.join()
// console.log(result)



// allElements = ""

// for (let i in marksList){
    // //    console.log(marksList[i])
    //    allElements += marksList[i]
    // }
    
    // console.log(allElements)



marksList = [45,45,78,99,68,33,14,56,78]

// break and continue
// for (let item of marksList){
//       if (item == 78)break
//       else {console.log(item)}
// }
//  fail <=33
// for (let item of marksList){
//     if (item <= 33) continue   
    
//     console.log(item)   
// }




// if else conditionning

// age = 17

// if (age==18){
//     console.log("can cast vote")
// }
// else if (age == 17){
//     console.log("Bali Umar")
// }
// else{
//     console.log("cannot cast vote")
// }





// arithmetic operator  +,-,*,-,/,%,**,++,--
// assignment operator  = , += , -=, *=, /=, %=
// camparison operator == ===(strict) != !==(strict) > < >= <=
//  logical operator  && ` or !
//  string operator
// teranary operators
//  type operator

 


// console.log( true && false && true)
// console.log(!!true)

// console.log("nitin" + " " + "chauhan")


// for loop 
// for (let i = 0; i < 5; i++) {
//     console.log("iteration",i)    
// }

// // while 
// let j = 0
// while (j < 3){
//     console.log("while loop",j)
//     j++
// }

// do while

// do {}
// while(true)
// i =1

// while (i<=20){
//     if (i%2==0){console.log(i)}
//     i++
// }



// for (let i = 1; i < 3; i++) {
//     console.log("table of ",i)
//     for (let j = 1; j <= 10; j++){
//       console.log(i+"X"+j+"="+i*j)
//     }
    
// }


// for (let i = 1;i<10; i++){
//    if (i==6);
//    break
// }



// ternary oeprator in js 


// ternary operator is  shortcut  for if-else statemetns that lets you write conditional logic in a single line


// syntax
// condition ? expression_if_true : expression_iof_false

// let number = 5;
// let result  = (number % 2 == 0 ? "Number is Even ":"Number is odd")

// console.log(result)


// age = 17

// console.log(age>=18 ? "Adult" : "Minor")

// let output = ""

// for (let i = 1; i <= 10; i++){
//     output += " " + i
// }
// console.log(output.trim())

// console.log([1,2,3,4,5,6,7,8].join(" "))


// let count = 1
// do {
//     console.log("Welcome")
//     count += 1
// }
// while (count < 6)

// studentName  = ["Satwik", "keshav","prakash","rahul","rohit"]

// for (const item of studentName) {
//     console.log(item)    
//     if (item == "prakash") break
// }
// for (let index = 1; index < 11; index++) {
//     if (index == 5) continue
//     console.log(index)
    
// }


// console.log("i am operator")
//  let x = 5;
// console.log(x++ + ++x); // 6+6   //5+7
// 5 + 7 = 12

// (7)
// 6 + 1
// console.log(x++  +  ++x)
// 5 + 7 
// // 5
// console.log(++x)


// and operator
// let ages = 17
// if (ages > 18 && ages < 30){
//     console.log("Adult")
// }

// or operator

// let loggedin = true

// if (loggedin || ages > 18){
//     console.log("access granted")
// }
// number  = 45
// if (number % 3 == 0 && number % 5 == 0){
//     console.log("divisible by 5 and 3 both")
// }

// let age = 18
// if (age >= 18){
//     console.log("cast vote")
// }
// else{
//     console.log("not eligible")
// }

// marks = 45
// if (marks >= 90){
//     console.log("grade A")
// }
// else if (marks >= 75 && marks <= 89){
//     console.log("grade b")
// }
// else if (marks >= 50){
//     console.log("grade c")
// }
// else{
//     console.log("Grade f")
// }


// num = 78

// if (num ==0){
//     console.log("number is zero")
// }
// else if (num > 0){
//     console.log("number is positive")
// }
// else{
//     console.log("number is negative")
// }

// num = 9
// if (num> 10){
//     if (num % 2 == 0){
//         console.log("number is greater than 10 and it is even")
//     }
// // }
// let isLoggedIn = true
// console.log(isLoggedIn ? "Welcome Back":"Please Log in!")


// bitwise operator in js --

// work on binary representation of numbers. they treat 
// perofrm operation bit by bit

// they are used in low level programminh
//  perform optimisation 
//  cryptographing and graphics

//  & (and) ^ (xor) ~Not << left shift

// 5 in binary = 0101
// 3 in binary = 0011

console.log(5 & 3)

// 0101          0011     ==>  0001 ==> 1

console.log(5 | 3)
// 0101                0011 ==> 0111 ==> 7

