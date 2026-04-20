const user = {
    firstName: 'Bartek',
    lastName: 'Nowak',
    age: 22,
}

const {
    firstName: name, 
    lastName: secondName
} = user // przypisuje firstName i lastName do nowych nazw zmiennych [name, secondName]
console.log(name, secondName);

const sayHelloFn = ({firstName, lastName})=>{
    console.log(`Hello ${firstName} ${lastName}`)
}

sayHelloFn(user)