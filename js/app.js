const user = {
    firstName: 'Bartek',
    lastName: 'Bogdanowicz',
    sex: 'male',
    age: 31
}

for(const key in user){
    console.log(user[key]);
}