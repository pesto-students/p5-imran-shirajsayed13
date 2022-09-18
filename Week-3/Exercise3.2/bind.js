let car = {
    model: 'fortuner',
    getModel: function() {
        return this.model
    }
}

let fn = car.getModel.bind(car)

// car context bounded
// expected output: fortuner
console.log(fn()) 

// The function gets invoked at the global scope
// expected output: undefined
let unboundGetModel = car.getModel
console.log(unboundGetModel())

// expected output: fortuner
let boundedGetModel = unboundGetModel.bind(car)
console.log(boundedGetModel())