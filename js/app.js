const btnsList = document.querySelectorAll('button')

const showInformation = function(e){
    console.log(e.type, this.innerText)
}

btnsList.forEach(function(btn){
    btn.addEventListener('mouseenter', showInformation)
    btn.addEventListener('click', showInformation)
})