// deklaracja zmiennych globalnych
var firstName = 'Ewa'
const sum = 12;
let counter = 1

function fn(param1, param2) {
    // parametry funkcji sa zmiennymi lokalnymi
    // deklarujemy zmienne lokalne
    var firstNameLocal = 'Anna'
    const numLocal = 12;
    let counterLocal = 2
}

{
    // deklaracja zmiennej globalnej
    var firstNameBlock = 'Kasia'
    // deklaracja zmiennych lokalnych
    const numBlock = 3;
    let counterBlock = 12
}