// zmienna globalna
const num = 12;
console.log(num); // 12


function fn(){
    // zmienna lokalna
    const num = 44
    console.log(num); // 44

    {
        // tworze nowy zakres przy pomocy bloku kodu
        const num = 450;
        console.log(num); // 450
    }
    console.log(num); // 44
}

fn()
console.log(num); // 12
