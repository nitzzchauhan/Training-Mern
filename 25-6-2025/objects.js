// object as a data type--> this will store the data just like array , string

// object is a container of properties and methods

// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"],
//     "model":"2015",
//     "manufaturedInIndia":true
// }

// {}  js object literal

// new Object

// let car2 = new Object()

// car2.name = "Maruti"
// car2.color = ["white","magenta"]
// car2.model = 202

// console.log(car2)





// x = [] // array literl
// y = new Array() // with new keyword


// s1 = new String()
// s2 = ""

// b1 = true
// b2 = new Boolean()


// object properties

// the named values, js objects, are called properties

// associative in php
// dictionaries in python
// hash map in java
// hashes in ruby and perl
// hash table in c

// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"],
//     "model":"2015",
//     "manufaturedInIndia":true
// }

// access js object properties
// objectname.propertyname
// console.log(car1.color)
// console.log(car1["color"])

// js object method
// methods are action that can be performed on objects 
//  they are similar to functions stored as property values.

// 


// function (){}

//  ()==> referes to surrounding scope.

// objects are object
// maths are object
// functions are object
// Date are object
// arrays , maps, sets are objects
// all js values , except primitive, are objects

// primitve -> string, number , boolean, null, undefinds, symbol, bigint  --> they all immutable (theya re hardcoded , cannot be changed)
//  

// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"],
//     "model":"2015",
//     "manufaturedInIndia":true
// }

// let c2 = car1

// // console.log(c2)

// c2.engine = "Diesel"
// c2.price = 1200000

// console.log(car1)

// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"],
//     "model":"2015",
//     "manufaturedInIndia":true
// }

// let name  = car1["name"]
// console.log(name)

//  adddition of new property
// car1.engine = "Diesel"
// car1.price = 1200000

// console.log(car1.color)

// car1.color.push("blue")

// car1.color = car1.color.push("green")

// console.log("hello ji")
// console.log(car1.color)

// var s = ["one","two"]
// console.log(s.push("three"))
// console.log(s)


// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"],
//     "model":"2015",
//     "manufaturedInIndia":true,
//     showroom:{
//         "delhi":"sarita vihar",
//         "noida":["city center","sector 11"]
//     }
// }
// console.log(car1.showroom.noida[1])

// deletion of property

// delete car1["model"]

// console.log(car1)


// fActory function
// --> factory function are functionn that return objects. they allow creating multiple similar object 
// without using classes

// function createPerson(name,age){
//     return {}
// }

// function abc(){
//     console.log("hello world")
//     return null
// }

// console.log(abc())

// function createPerson(name,age){
//     return {
//         name,
//         age,
//         greet(){
//             return (`I am ${name} and my age is ${age}`)
//         }
//     }
// }

// let p1 = createPerson("Satwik",22)
// let p2 = createPerson("Abhijit",22)

// console.log(p2.greet())


// name  = "Kishor"
// name2  = "Bhargavi"
// name3  = "Rohit"

// console.log("I am ${4+4}")
// console.log(`I am ${4+4}`)



// constructor function
// class  --> in js --> constructor function
// .object    new keyword


// class ==== constructor function in js 

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         return (`Hello, I am ${this.name}`)
//     }
// }
// // create object

// const p1 = new Person("Ravi",22)
// const p2 = new Person("Yash",22)

// console.log(p1.greet())

// console.log(p2.greet())



// {name:"yash"}
// {name:"keshav"}
// {name:"keshav"}
// {name:"keshav"}
// new Object()

// function newJoinee(name,age,doj,dob,dept){
//     this.name = name
//     this.age = age
//     this.doj = doj
//     this.dept = dept
// }

// e1 = newJoinee("KESHAV",22,2025,2002,"S")
// e1 = newJoinee("KESHAV",22,2025,2002,"S")
// e1 = newJoinee("KESHAV",22,2025,2002,"S")
// e1 = newJoinee("KESHAV",22,2025,2002,"S")
// e1 = newJoinee("KESHAV",22,2025,2002,"S")
// e1 = newJoinee("KESHAV",22,2025,2002,"S")


// functions are also objects
// function greet(){
//     console.log("hi ")
// }

// greet.language = "angreji"

// console.log(typeof greet)
// console.log(greet.name)
// console.log(greet.language)

// value vs reference
// pass by value
// let a = 10
// a++
// console.log(a)
// let a = 10
// let b = a
// b++
// console.log(a,b)
// loops in object

// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"],
//     "model":"2015"
// }

// for in

// 2. object.keys(object)
// console.log(Object.keys(car1))

// // 3. object.values(object)
// console.log(Object.values(car1))

// 4. oBjext.entries

// console.log(Object.entries(car1))
// [
//     [key1,valu1],
//     [key2,valu2],
//     [key3,valu3],

// ]
// let [a,b,c] = ["sunday","monday","wednesday"]
// console.log(a)
// console.log(b)
// console.log(c)

// for (let [key,value] of Object.entries(car1)){
//     console.log(`Key is ${key} and value is ${value} `)
// }

// cloning an object
// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"]
// }

// manual
// let copyCar2 = {}
// for in on car1

// 2. Object.assign
// let copy3Car1 = Object.assign({},car1)

// console.log(copy3Car1)

// 3. spread operator
// let copy4 = {...car1}

// shallow copy and deep copy
// shallow copy

// let car1 = {
//     "name":"Fiat",
//     "color":["red","white"]
// }

// let copy5 = {...car1}
// copy5.model = [2015,2016]
// copy5.color[2] = "Green" 

// console.log(copy5)
// console.log(car1)


// ======================
// deep copy
let car1 = {
    "name":"Fiat",
    "color":["red","white"]
}
// json

// limited 
// js object  --> json (text) --> js obj

// const deep_copy = JSON.parse(JSON.stringify(car1))
// // console.log(deep_copy)
// deep_copy.color[2] = "green"

// console.log(deep_copy)
// console.log(car1)

// recursive deep vopy


// lodash

// let dt = new Date()

// console.log(dt)

// specific date


let today  = new Date("2025-06-25")
// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getDate())

let yesterday  = new Date("2025-06-24")
console.log(today - yesterday)



