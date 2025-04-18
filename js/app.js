// deklaruje 3 elementowa tablice
const names = ['Jan', 'Anna', 'Kasia'];

if(names.indexOf('Jan') > -1){
    console.log('Istnieje w tablicy!');
}else {
    console.log('Brak w tablicy!');
}

if(names.includes('Kasia')){
    console.log('Istnieje w tablicy');
} else {
    console.log('Brak w tablicy!')
}