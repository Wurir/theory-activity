class Person {
    constructor({name, age = 0}){ //przyjelo się ze nazwy parametrow sa takie same jak nazwy wlasciwosci, ale nie jest to regułą
        this.name = name
        this.age = age
    }
}

const person1 = new Person({name: 'Bartek', age : 32}) //można wykorzystać destrukturyzację, rest operator lub wartosci domyślne
const person2 = new Person({name: 'Jan'})
const person3 = new Person({name: 'Anna', age: 58})

console.log(
    person1.name, // Bartek
    person1['name'] // Bartek
); // mozna uzyc obu sposobow
