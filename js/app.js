const formEl = document.querySelector('form')
formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    const confirm = e.target.elements['confirm']
    //wyszukuje element o nazwie confirm

    if(!confirm.checked){
        //jesli checkbox nie jest zaznaczony
        const numberAgreement = confirm.value
        //pobieram wartosc dla input
        alert('Confirm agreement no: ' + numberAgreement)
        //wyswietlam alert
    } else{
        alert('Thank you! Data was send.')
    }
}