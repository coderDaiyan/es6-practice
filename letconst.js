const khalarName = "Peyara Khala"
// khalarName = "Apel Khalu"
console.log(khalarName);

const vaiGula = ["Istiak", "Anas", "Jarif", "Ehsan"]
vaiGula[1] = "Hablu"
console.log(vaiGula);

let os = "I use windows"
os = "I use mac OS"
console.log(os);

function getSum() {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum = sum + i
    }
    return sum
}
console.log(getSum())