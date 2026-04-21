class Person {
    constructor(name,) {
        this.name = name
        this.lang = null
    }

    getName() {
        return this.name
    }
}

class Polish extends Person { // tworze klase Polish, ktora dziedziczy (extends) właściwości oraz metody z klasy Person
    constructor(name) {
        super(name) // super to łącznik pomiedzy klasa dziedziczona, a rodzicem. Jest niezbedny do odwolania sie do właściwosci i metod z dziedziczonej klasy
        this.lang = 'pl'
    }
}

const polish = new Person('Bartek Bogdanowicz')

console.log(polish.getName())
