const obj = {
    firstName: 'Bartek',
    lastName: 'Nowak',
    age: 22,
}

const {
    firstName: name, 
    lastName: secondName
} = obj // przypisuje firstName i lastName do nowych nazw zmiennych [name, secondName]
console.log(name, secondName);
