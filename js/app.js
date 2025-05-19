const btnEl = document.querySelector('.btn')
const textEl = document.querySelector('.text')

const onEnter = function(){
    textEl.textContent = 'enter...'
}

const onLeave = function(){
    textEl.textContent = 'leave...'
}

if(btnEl && textEl){
    btnEl.addEventListener('mouseenter', onEnter)
    btnEl.addEventListener('mouseleave', onLeave)
}