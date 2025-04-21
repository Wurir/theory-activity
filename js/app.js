const car = {
    color: 'red',
    mileage: 1203,
    horsepower: 540,
    seatsNumber: 2,
}

car.color = 'blue'
// zmieniam wartosc dla wlasciwosci [color]

console.log(car.color, car['color']);
// wyświetlam aktualna wartosc na dwa sposoby

const hp = car.horsepower
// przypisuje wartosc z wlasciwosci [horsepower] do zmiennej [hp]
console.log(hp);
