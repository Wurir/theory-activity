const formEl = document.querySelector('form')

const handleSubmit = function(e){
    e.preventDefault()
    // zatrzymuje wyslanie fomularza co umozliwi zrobienie np walidacji

    console.log('submit!')
}

formEl && formEl.addEventListener('submit', handleSubmit)