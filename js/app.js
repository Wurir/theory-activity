const numbers = [1, 2, 3, 4, 5];

// wyswietlanie danych w konsoli
for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

// obliczanie sumy na podstawie liczb w tablicy
let sum = 0
for(let j=0; j<numbers.length; j++) {
    sum += numbers[j]
}
console.log(sum); // 15
