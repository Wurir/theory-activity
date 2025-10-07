const btnsList = document.querySelectorAll('button')

const showObject = function(e){
    console.log(e)
    // pobieram szczegolowe informacje
}

btnsList.forEach(function(btn){
    btn.addEventListener('mouseenter', showObject)
    btn.addEventListener('click', showObject)
})