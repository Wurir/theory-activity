// const getUserInput = function(message){
//     return prompt(message)
// }

const sumNumbersFromUser = function(userInputFn){ // funkcja jako parametr
    const a = userInputFn('Podaj liczbę a') // callback, wywołanie fn wewnatrz fn
    const b = userInputFn('Podaj liczbę b')

    const sum = parseFloat(a) + parseFloat(b)
    return sum
}

const result = sumNumbersFromUser(function(message) {
    return prompt(message)
})

console.log(result);
1