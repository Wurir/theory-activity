const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(element, index, array) {
    console.log(element);
})

function showItemWithIndex(item, index) {
    console.log(index, '=>', item)
}

numbers.forEach(showItemWithIndex)

let sum = 0
function getSum(item){
    return sum += item
}

numbers.forEach(getSum)
console.log(sum);
