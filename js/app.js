class Person {
    constructor(firstN, lastN){ //konstruktor moze przyjmowac parametry przekazywane podczas tworzenia obiektu
        this.firstName = firstN
        this.lastName = lastN
    }
}

const person1 = new Person('Bartek', 'Nowak') //przekazuje parametry, ktore ląduja w konstruktorze
const person2 = new Person('Jan', 'Kowalski')
const person3 = new Person('Anna', 'Wybyła')

console.log(
    person1, // Person {firstName: 'Bartek', lastName: 'Nowak'} 
    person2, // Person {firstName: 'Jan', lastName: 'Kowalski'} 
    person1 === person2 //false
);
