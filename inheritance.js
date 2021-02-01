class Parent {
    constructor (){
        this.fatherName = "Schwarznegger"
    }
}
class Child extends Parent{
    constructor (name){
        super()
        this.name = name
    }
    getFullName(){
        return this.name + ' ' + this.fatherName
    }
}
const child = new Child("Anas")
console.log(child.getFullName());
const child2 = new Child("Mary")
console.log(child2.getFullName());