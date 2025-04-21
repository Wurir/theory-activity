// W pliku app.js znajdziesz zmienną o nazwie years, która przechowuje tablicę liczb określających rok.
// Twoim zadaniem będzie wygenerowanie na jej podstawie nowej tablicy liczb określających lata, które minęły od wskazanej daty do obecnego czasu. Do rozwiązanie tego zadania wykorzystaj metodę tablicową .map().
// Przykładowo: 2021 - 1980 = 41 – liczba 41 ma się pojawić jako pierwszy element nowej tablicy.

const years = [1980, 1934, 2002, 2019];

const yearsPassed = years.map(function(element){
    return 2025 - element
})

console.log(yearsPassed);
