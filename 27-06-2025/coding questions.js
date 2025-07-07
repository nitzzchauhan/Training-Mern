// function flatten(arr){
//     let result  = []
//     function flat(arr){
//         for (let i = 0; i < arr.length; i++){
//             // console.log(i)
//             if (Array.isArray(arr[i])){
//                 flat(arr[i])
//             }
//             else{
//                 result.push(arr[i])
//             }
//         }        
//     }
//     flat(arr)
//     return result
// }

// const arr1 = [1,2,[3,4,[3,4,5,[7,5]]],5]
// console.log(flatten(arr1))

// console.log(Array.isArray(5))


// [1,2,[3,4],5] = satwik
// [1,1,2,2,3,4,5] = ravi
// [1,2]
// function removeDuplicates(arr){
//     let unique = []
//     for (let i = 0; i< arr.length; i++){
//         let exists = false
//         for (let j = 0; j < unique.length; j++){
//             if (arr[i] === unique[j]){
//                 exists = true;
//                 break
//             }
//         }
//         if (!exists){
//             unique.push(arr[i])
//         }
//     }
//     return unique
// }
// console.log(removeDuplicates([1,1,1,1,2,2,2,3,3,3,5,45,55,88,1,2]))


// [1,1,1,2,3,4,5] = ravi

// [1,2,3,4,5] = result

function capitalizeWords(strs) {
    if (!strs) return "invalid string"
    let str = strs.trim()
    let result = ""
    result += str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] == " "){
            result += str[0].toUpperCase()
        }
        else{
            result += str[i]
        }
    }
    return result
}
console.log(capitalizeWords("hello    world"))

// console.log("hello world".at(-1))

