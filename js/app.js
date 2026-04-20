const arr = [1, 2, 3, 4]

const [first, ...rest] = arr //wyciagam 1, a reszte przypisuje do nowej tablicy
console.log(first, rest);
// 1 [2, 3, 4]

const obj = {
    name: 'Bartek',
    weight: '90.5kg',
    height: '176cm',
}

const {name, ...other} = obj
console.log(name, other);
// Bartek {weight: '90.5kg', height: '176cm'}
