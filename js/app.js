const handleClick = function () {
    console.log('button was clicked')
}

const btnEl = document.querySelector('.btn')
if (btnEl) {
    btnEl.addEventListener('click', handleClick)
}