const sizeList = document.querySelectorAll('[type="radio"]')
const labelEl = document.querySelector('label')

labelEl.addEventListener('click', showSizes) //wykorzystuje propagacje zdarzen

function showSizes(e){
    sizeList.forEach(function(element){
        console.log(element.value, '=>', element.checked) //checked pokazuje czy dany element jest zaznaczony zwracajac boolean
    }
)}