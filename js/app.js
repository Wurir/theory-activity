const formEl = document.querySelector('form')

formEl.addEventListener('submit', function(e){
    e.preventDefault()
    const company = e.target.elements.company //wyszukuje odpowiedni element

    console.log(company.value); //pobieram wartosc wpisana przez uzytkownika
    
})