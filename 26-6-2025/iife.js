// iife --> immediately invoked function expression

// (()=>{})()
// (function(){})()

// avoid polluting the global scopt
// encapsulation of variable
// private scope creation
// execute code immidialterly
// used in modular pattern
//  basic iife
// (function(){
//     console.log("iife execute")
// })()

// iife with parameter
// (function(name){
//     console.log(`hello ${name}`);
// })("nitin");


// (function(name){
//     console.log(name)
// })("nitin")


const counter = (function () {
    let count = 0
    return {
        increment: function () {
            count++
            return count
        },
        reset: function () {
            count = 0;
        }
    }
})()
// {
//     increment: function() {
//         count++
//         return count
//     },
//     reset: function() {
//         count = 0;
//     }
// }

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.increment())

// closure 
//  is when a function remebers and uses variables from outside itw own scope
// even after that outer function has finished running.

function outer(){
    let name = "nitin"
    function inner(){
        console.log(`hello, ${name}`)
    }
    return inner
}

// console.log(outer.name)
// greet ==inner --> closure because it remebers name from outer() even after outer() is done
let greet = outer()
console.log(greet())

console.log(greet.prototype)



