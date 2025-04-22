const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '22',
        month: '04',
        year: '1985'
    }
}


isBirthday(user)

function isBirthday(user){
    const today = getDate()
    const userDate = user.born.day + '-' + user.born.month
    if(today === userDate) {
        console.log('Wszystkiego najlepszego!');
    }else {
        console.log('Nie masz dzis urodzin.');
    }
}

function getDate(){
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const formatMonth = month < 10 ? ('0' + month) : month
    const today = day + "-" + formatMonth
    return today
}