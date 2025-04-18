// deklaracja zostala przeniesiona na gore ale bez wartosci, wiec mamy undefined
console.log(firstName); // undefined

// deklaracja zmiennej
var firstName = 'Anna'
console.log(firstName);

// bląd! wartosc showInfo to undefined, sama deklaracja została przeniesiona - bez wartosci,
// undefined nie da sie wywołac

showInfo()

var showInfo = function () {
    console.log('Hoisting');
    
}