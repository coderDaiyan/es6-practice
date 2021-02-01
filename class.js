class Customer {
    constructor(cId, cProduct) {
        this.id = cId
        this.product = cProduct
        this.place = "Chittagong"
    }
}

const customer1 = new Customer(4, "Macher Dim")
const customer2 = new Customer(5, "Jhola gur")
console.log(customer1, customer2);