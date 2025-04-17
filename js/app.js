function showMessage() {
    console.log('SetTimeout');
}

const showName = function(){
    console.log('Michał');
}

setTimeout(showMessage, 1000)
setTimeout(showName, 2000)

setTimeout(function(){
    console.log('funkcja anonimowa!');
}, 5000)