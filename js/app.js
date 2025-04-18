const numbers = []
// deklaruje pusta tablice

const names = new Array()
// deklaruje pusta tablice

console.log(numbers, names); // [], []
// wyswietlam tablice z zawartoscia

numbers.push(1, 2, 3)
//dodaje 3 elementy typu [number]

names.push('Jan');

console.log(numbers, names);

console.log(numbers.length, names.length);
// wyswietlam ilosc elementow: 3 oraz 1, przechowywanych w tablicy


