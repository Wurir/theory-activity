class Square{
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    getArea(){ return this.a * this.b}
}

class Cube extends Square{
    constructor(a, b, c){
        super(a, b)
        this.c = c
    }
    getArea(){ return super.getArea() * this.c}
}

const cube1 = new Cube(1, 2, 3)
console.log(cube1.getArea()); // 6
