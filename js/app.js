const selectEl = document.querySelector('select')

selectEl.addEventListener('change', showUser)

function showUser(e){
    console.log(
        e.target.value,
        //wybrana wartosc dla option
        e.target.selectedIndex,
        //index zaznaczonego option
        e.target.selectedOptions
        //lista zaznaczonych elementow
    );
    
}