const travelPrice = {
    flight: 591,
    hotel: 1400,
    excursions: 421,
    other: 120
}

const totalPrice = getTotalPrice(travelPrice)
console.log(totalPrice); // 2532

function getTotalPrice(priceObject){
    let totalPrice = 0
    for(const key in priceObject){
        totalPrice += priceObject[key]
    }
    return totalPrice
}