function showInfo(){
    console.log(this.text);
}

const notice = {
    text: 'Notice!',
    showText: showInfo,
}

const error = {
    text: 'Error!',
    showText: showInfo,
}

notice.showText() // Notice!
error.showText() // Error!