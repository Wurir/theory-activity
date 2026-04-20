const arrNums = [1, 2, 3]
const arrBools = [true, false]

console.log([...arrNums, ...arrBools]); // łącze obie tablice używajac spread operator [...], rozpraszajac dwie tablice w jednej

const calcSum = (...nums)=>{
    return nums.reduce((acc, num)=> acc + num, 0)
} //tworze funkcje, ktora przyjmuje limitless argumentow i zwraca ich sume

console.log(calcSum(1, 2, 3, 4, 5));
