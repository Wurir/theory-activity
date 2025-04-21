const car = {
    color: 'red',
    mileage: 1203,
    horsepower: 540,
    seatsNumber: 2,
    getColor: function(){
        return this.color
    },
}

car.getSeatsNumber = function(){
    return this.seatsNumber
}

console.log(car.getColor(), car.getSeatsNumber());

