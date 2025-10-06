const btnEl = document.querySelector('.btn')

if(btnEl) {
    // jesli został wyszukany

    btnEl.addEventListener('click', function(){
        // wywolaj te funcke, jesli wyszukany przycisk zostanie klikniety

        console.log('button was clicked')
        // wyswietl napis w consoli
    })
}