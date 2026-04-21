class Person {
    constructor(){
        this.firstName = 'Bartek'
        this.lastName = 'Nowak'
    }
}

const person1 = new Person()
const person2 = new Person()
const person3 = new Person()

console.log(
    person1, // Person {firstName: 'Bartek', lastName: 'Nowak'} 
    person2, // Person {firstName: 'Bartek', lastName: 'Nowak'} 
    person1 === person2 //false
);
