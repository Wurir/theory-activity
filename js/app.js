const user = {
    firstName: 'Alicja',
    lastName: 'Nowak',
    age: 24,
}

for(const key in user){
    console.log(key);
}

for(const key in user){
    console.log(user[key]);
}