const contentEl = document.querySelector('.content')
// Jeśli plik JS jest podpięty do sekcji <head/>,
// to zmienna [contentEl] będzie zawierać [null].

const init = function () {
    const contentEl = document.querySelector('.content')
    // Jeśli wyszukanie nastąpi po załadowaniu DOM-u,
    // to element zostanie odnaleziony prawidłowo.
    // Dzięki wykorzystaniu DOMContentLoaded miejsce
    // podpięcia pliku JS nie ma już znaczenia!
}

document.addEventListener('DOMContentLoaded', init)