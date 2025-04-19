const numbers = [1, 2, 3, 4, 5];
const sum = getSum(numbers)
const evenNumbers = getEvenNumbers(numbers)
const sumOfEvenNumbers = getSum(evenNumbers)

function getSum(arr) {
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function getEvenNumbers(arr){
    const evenNumbers = []
    for(let j=0; j<arr.length; j++){
        if(arr[j] % 2 === 0){
            evenNumbers.push(arr[j])
        }
    }
    return evenNumbers
}

console.log(sum); // 15
console.log(evenNumbers); //  [2, 4]
console.log(sumOfEvenNumbers); // 6
