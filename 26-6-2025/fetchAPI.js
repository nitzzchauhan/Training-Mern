// fetch api makes network request tp server from brwoser using js

// fetch(url,option)  --> promise

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))



// network request
// get --> get data
// post --> send data
// delete --> delete resource
// put --> update entire
// patch --> update the some aprt of data

// fetch(URL,option)

/* The code you provided is attempting to make a POST request to the URL
'https://jsonplaceholder.typicode.com/todos' using the Fetch API in JavaScript. Here is a breakdown
of the code: */
// form


// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method:"POST",
//     header:{},
//     body:{

//     }
// })

// setTimeout(() => {console.log("i am timer 8 function")}, 8000);
// console.log("first")
// console.log("second")
// console.log("third")
// console.log("fourth")
// setTimeout(() => {console.log("i am timer function 3 second")}, 3000);

// syncronuous

// sync or async
// promise

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))


// // promise state
// // pending rejected  fulffiled


// ()=>{} --> promise


// fetch('htt://jsonplaceholder.typicode.com/todos/1')
// .then((response)=>response.json())
// .then((data)=>{console.log(data)})

// .then.catch()
// ()=>{}.then(()=>{}).then().then().then().catch((error)=>{
//     console.log(error)
// })

// async function getData(){
//     try{

//     }
//     catch (){

//     }
// }

// error handling

// try{
//     let result = 5/0
//     console.log(result)
//     // console.log(a)
// }
// catch(error){
//     console.log("error is",error)
// }
// finally{
//     console.log("always run")
// }






// implement my instagram dashboard -> need information --> server --> fetch api (promise)--> i can only my dashbaord
// fetch('htt://jsonplaceholder.typicode.com/todos/1')
// .then((response)=>response.json())
// .then((data)=>{console.log(data)})

// async function getData(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await response.json()
//         console.log(data)
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
// getData()
let arr = [1,2,1,[1,2,[3,4,4,[6,7]]]]
let str = String(arr)
console.log([str])

console.log(arr.flat(Infinity))
const s1 = new Set(arr.flat(3))
// console.log(s1.forEach((x)=>{
//     console.log(x)
// }))
// console.log(s1.clear())
// foreach , for of
// let arrset = Array.from(s1)
// console.log(arrset)


// let arr3 = [1,2,3,5,5,5,6]
// let arr2 = [...new Set(arr3)]
// console.log(arr2)


// console.log(())

// hello == olleh



