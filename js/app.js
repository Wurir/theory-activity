const numbers = [1.12, 2.13, 3.31, 4.61, 5.32];
const integers = numbers.map(parseNumbersToInt)
console.log(integers); // [1, 2, 3, 4, 5]


function parseNumbersToInt(element, index, array){
    return parseInt(element)
}

const evenNumbers = integers.map(isEven)
console.log(evenNumbers); // [false, true, false, true, false]

function isEven(element){
    return element % 2 === 0
}

const cart = [
    ['skarpetki', 3, 4.90],
    ['długopis', 4, 3.90],
    ['zeszyt', 2, 5.90]
]

const costPerProduct = cart.map(function(product){
    return (product[1] * product[2]).toFixed(2)
})

console.log(costPerProduct);
