// W pliku app.js znajdziesz zmienną o nazwie years, która przechowuje tablicę liczb określających rok.
// Twoim zadaniem będzie wygenerowanie na jej podstawie nowej tablicy liczb określających lata, które minęły od wskazanej daty do obecnego czasu. Do rozwiązanie tego zadania wykorzystaj metodę tablicową .map().
// Przykładowo: 2021 - 1980 = 41 – liczba 41 ma się pojawić jako pierwszy element nowej tablicy.

const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(element){
    if(element % 2 === 0){
        return element
    }
})

console.log(evenNumbers); // [2, 4, 6]

const sumNumbers = evenNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}, 0)

console.log(sumNumbers); // 12
