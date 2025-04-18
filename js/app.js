// deklarujemy zmienna, ktora bedzie przechowywac nasze wylosowane liczby
const numbers = []
//tworzymy petle, ktora bedzie sie wykonywac dopoki ilosc elementow w tablicy
// jest mniejsza niz 5

while(numbers.length < 5) {
    // losujemy liczbe od 0 do 10
    const num = Math.round(Math.random() * 10)

    // sprawdzamy czy wylosowana liczba znajduje sie w tablicy
    if(!numbers.includes(num)){
        numbers.push(num)
        // dodaje wylosowana liczbe do tablicy
    }
}

console.log(numbers);
