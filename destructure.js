// Object Destructuring

const man = {
    name : "Abul Hasnat", 
    age: 20, 
    study: "Programming Hero", 
    job: "Intern at Stack Learner", 
    location: "Meherpur"
}

const { age } = man
const { job } = man
// console.log(age)
// console.log(job)

// const age = man.age
// const job = man.job
// console.log(age);
// console.log(job);

const complexObject = {
    name: "Hasnat", 
    info: {
        address: 'Cha er tong', 
        food: 'Dal vat'
    }
}

const { food } = complexObject.info
console.log(food);


// Array Destructuring

const friends = ['Shehwar Karim', 'Jabed Karim', 'Abul Karim', 'Hasnat Karim', 'Asief Karim']
const [ chotoFriend, jabedBhai,  ...bhaiGula ] = friends
console.log(chotoFriend, jabedBhai, ...bhaiGula);