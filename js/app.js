const assignPrice = (name, ...products) => {
    let price = 0
    products.forEach(item => price += item.price);

    return { 
        name, 
        price, 
        products,
    } //shorthand properties = name: name  => mozna zapisac jako samo [name]. Tak samo z resztą
}

console.log(
    assignPrice(
        'Łukasz Nowak',
         { name: 'Karty', price: 20 },
          { name: 'książka', price: 49 },
        )
)
