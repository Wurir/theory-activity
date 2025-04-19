const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(element, index, array) {
    console.log(element);
})

function showItemWithIndex(item, index) {
    console.log(index, '=>', item)
}

numbers.forEach(showItemWithIndex)

function getSum(arr){
    let sum = 0
    arr.forEach(function(num){
        sum += num
    })
    return sum
}

const sum = getSum(numbers)
console.log(sum);

