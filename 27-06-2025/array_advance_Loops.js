// foreach  --> undefined 
// filters  --> [] --> containing all elemetns that pass a condition 
// reduce   --> single value by accumulating results from a callback function
// regex

// const fruits = ["apple", "banana", "mango"]


// const names = ["rohan", "abhijeet", "pulkit"]

//     // for each is designed for side effects, not data tranformatiom
//     // perofrm an action , printing, updating, updating external variable etc.

//     console.log(names.map((element) => {
//         return "Mern " + element
//     }))


// shopping cart
// sum
// reduce(callback(accumulator,currentValue,index,array),initialvalue)
// +1000
// sum  = 45
// 33+45 = 78 =sum
// 78+78 = 156 =sum
// 66+156 = 222 =sum
// 78+222 = 300 =sum
// 15+300 = 315
// total = 1315

const arr2 = [45,33,78,66,78,15]
const total = arr2.reduce((sum,current)=>  "hello" ,1000)
console.log(total)

// find maximum

// const arr3 = [45,33,78,66,74,15]
// const max = arr3.reduce((a,b)=>{
//     return  (a > b ? a : b )
// })
// console.log(max)
// a=45
// a = 45
// a = 78
// a = 78
// a = 78



// const result  = arr2.filter((element,index,array)=>{
//     arr2.pop()
//     console.log(array)
//    return true 
// })
// console.log(result)

// const result  = arr2.filter((element,index,array)=>{
    
//    return " "
// })
// console.log(result)


// const v1 = ()=>  { return "i am curly" } 
// console.log(v1())