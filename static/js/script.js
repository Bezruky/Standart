// Burger
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')
const link = document.querySelectorAll('.menu__link')
const contacts = document.querySelectorAll('.header__contacts li>button')

burger.addEventListener('click', () => {
    if (!(burger.classList.contains('active'))) {
        burger.classList.add('active')
        menu.classList.add('active')
        document.body.classList.add('lock')
    } else {
        burger.classList.remove('active')
        menu.classList.remove('active')
        document.body.classList.remove('lock')
    }
})
link.forEach(elem => {
    elem.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active')
            menu.classList.remove('active')
            document.body.classList.remove('lock')
        }
    })
})

contacts.forEach(elem => {
    elem.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active')
            menu.classList.remove('active')
            document.body.classList.remove('lock')
        }
    })
})