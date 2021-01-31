// function sum(x, y){
//     return x + y
// }

// const sum = function(x, y){
//     return x + y
// }

// Arrow Functions
const squareIt = num => num * num // Single Parameter
const add = (a, b) => a + b // Double Parameter
const give5 = () => 5 // No Parameter
const doMath = (a, b) => {
    const sum = a + b
    const diff = a - b
    return sum + diff
} // Multiline Function

// Declare Results
const result = squareIt(6)
const result2 = add(4, 9)
const result3 = give5()
const result4 = doMath(14, 4)

// Console Logs
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);