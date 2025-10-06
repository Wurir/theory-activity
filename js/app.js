const handleClick = function(){
    console.log('button was clicked')
}

const btnEl = document.querySelector('.btn')

if(btnEl) {
    // jesli został wyszukany

    btnEl.addEventListener('click', handleClick)
}