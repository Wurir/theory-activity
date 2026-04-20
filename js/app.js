const fn1 = function(a, b ='bbb', c = 12){
    console.log (a, b, c)
}

const fn2 = (a, b, c = 12) => {
    console.log(a, b, c)
}

fn1() // undefined 'bbb' 12
fn2(47) // 47 udefined 12

const obj = {name: 'Bartek'}
const {name, age = 32} = obj
console.log(name, age); // Bartek 32


//przypisuje wartosci do zmiennych, ktorych waretosc nie zostala okreslona