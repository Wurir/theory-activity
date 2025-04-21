// W pliku app.js znajdziesz dwie funkcje, których masz nie modyfikować.
// Funkcja getRandomInteger losuje liczby całkowite z przedziału, który został zdefiniowany przez parametry.
// Funkcja createRandomArray tworzy tablicę o losowej liczbie elementów (od 1 do 10). Elementami tymi są losowe liczby z przedziału od 1 do 100.
// Zwróć uwagę, że każda z funkcji wykonuje jedno konkretne zdanie. Tak należy je budować. Zauważ również, że funkcja getRandomInteger jest wykorzystywana w 2 miejscach. 
// To był prawdziwy powód jej utworzenia. Zamiast w obu miejscach powielać kod, umieściłem go w jednej funkcji i to ją wykorzystałem dwukrotnie.
// Tym razem Twoim zadaniem będzie wyświetlenie w konsoli wszystkich elementów tablicy:
// najpierw przy pomocy pętli for,
// potem przy pomocy metody tablicowej .forEach().
// Dodatkowo – już poza pętlą – wyświetl wartość ostatniego elementu tablicy. 
// Pamiętaj, że po każdym odświeżeniu strony długość tablicy będzie inna. Twój kod powinien działać prawidłowo po każdym ponownym uruchomieniu strony.


const randomArray = createRandomArray();
console.log(randomArray);

for(let i=0; i<randomArray.length; i++){
    console.log(randomArray[i], "for loop");
}

randomArray.forEach(function(element){
    console.log(element, 'forEach'); 
})

console.log(randomArray[randomArray.length - 1]);

// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for(let i=0; i<len; i++) {
        arr.push( getRandomInteger(1, 100) );
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}