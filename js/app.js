const numbers = [111, 12, 2, 1, 201];

numbers.sort(function(a, b) {
    // sortowanie od najmniejszej do najwiekszej wartosci
    return a - b;
})
console.log(numbers);


numbers.sort(function(a, b ) {
    // sortowanie od najwiekszej do najmniejszej wartosci
    return b - a;
})

console.log(numbers);
