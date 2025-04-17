// W pliku app.js napisz funkcję o nazwie showTime i ją wywołaj (uruchom).
//W ciele tej funkcji wprowadź instrukcje, które pozwolą wyświetlić w konsoli informacje o aktualnej godzinie.


const showTime = function() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
}

showTime()
