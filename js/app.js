const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if(randomNumber >= 5){
    for(i = 5; i <= randomNumber; i++){
        console.log(i);     
    }
} else {
    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}