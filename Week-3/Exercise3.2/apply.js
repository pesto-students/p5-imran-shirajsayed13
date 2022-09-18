let car = {
    model: 'fortuner',
    price: 45
}

let getCar = function(manufacturer, fuelType) {
    console.log(`${manufacturer} manufactures ${this.model} it's on road price is ${this.price} and fuelType is ${fuelType}`)
}

getCar.apply(car, ['Toyota', 'Diesel'])