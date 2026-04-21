class Person {
    constructor({name, age = 0}){
        this.name = name
        this.age = age
    }

    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
}

const person = new Person({name: 'Bartek', age : 32})
person.setName('Bartosz Bogdanowicz')

console.log(person.getName())
