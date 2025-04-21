const travelPrice = {
    flight: 591,
    hotel: 1400,
    excursions: 421,
    other: 120
}

const totalPrice = getTotalPrice(travelPrice)
console.log(totalPrice); // 2532

function getTotalPrice(priceObject){
    const values = Object.values(priceObject)
    const totalPrice = values.reduce(function(acc, price){
        return acc + price
    }, 0)
    return totalPrice
}