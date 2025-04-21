function showInfo(){
    console.log(this.text);
    function changeContext() {
        console.log(this.text);
    }
    changeContext() // undefined
}

const notice = {
    text: 'Notice!',
    showText: showInfo,
}

const error = {
    text: 'Error!',
    showText: showInfo,
}

notice.showText() // Notice! + undefined
error.showText() // Error! + undefined