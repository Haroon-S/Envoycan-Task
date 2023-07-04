

let menu_open = document.getElementById('menu-open')
let menu_close = document.getElementById('menu-close')
let menu = document.getElementById('menu-dropdown')

menu_open.addEventListener('click', function () {
    console.log(menu.className);
        menu.className = "absolute top-0 right-0 w-full transition-all duration-300 overflow-hidden"
})
menu_close.addEventListener('click', function () {
    console.log(menu.className);
        menu.className = "absolute top-0 right-0 w-0 transition-all duration-300 overflow-hidden"
})

