// mozemy wywolac getNum(), poniewaz hoisting przeniosl deklaracje zmiennej
const num = getNum()
console.log(num); // 2

// deklaracja funkcji
function getNum() {
    return 2
}

// deklaracja zostala przeniesiona na gore, ale bez wartosci wiec mamy undefined

console.log(fistName);

// deklaracja zmiennej
var firstName = 'Anna'