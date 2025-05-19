const btnsList = document.querySelectorAll('button')

const changeText = function () {
    this.innerText = 'clicked';
}

btnsList.forEach(function (btn) {
    btn.addEventListener('click', changeText)
})