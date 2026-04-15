const arr = [1, 2, 3, 4, 5]

arr.forEach((arr, index)=> {
    console.log(`${arr} => ${index}`)
})

const newArr = arr.map((item, i)=>{
    return item * i
})

console.log(newArr);
