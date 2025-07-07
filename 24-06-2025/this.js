// global scope        --> window(browser)
// global strict mode
// inside a method
// inside a regular function
//  arrow function
//  constructor function
// even handler
// console.log(this)


// // regular function
// function add(a,b){
//     console.log(a+b)
// }
// add(7,2)


//arrow function --> shorter syntax --> anonymous function
// // ()=>{} -->  =>
// const addition = (a,b)=>{console.log(a+b)}
// addition(1,3)

// const fullName =  a => console.log(a+" Mehra");
// fullName("Deepak")

//  window or {}
// const greet = ()=>{
//     console.log(this)
// }

// hello undefined

// const user = {
//     name:"Nitin",
//     greet:()=>{
//         console.log("hello" + this.user)
//     }
// }

// user.greet()

// window:{
//     user--> ()=>{this}
// }



// this --> object refer
// js --> setInterval(()=>{},2000)

// async 
// line1
// line2
// line3

// setInterval(()=>{console.log("i am set Interval")},1000)





// const timer = {
//     seconds:0,
//     start: function(){
//         setInterval(()=>{
//             this.seconds++;
//             console.log(this.seconds)
//         },1000)
//     }
// }

// timer.start()