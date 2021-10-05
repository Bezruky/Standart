// Плавный переход якорей
let links = document.querySelectorAll('li>a[href^="#"]')
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()
        const id = link.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    })
})

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

// Кнопка card
document.querySelectorAll('.card__button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.quanitiy__input').forEach(input => {
            if (!(Number(input.value) < 1)) {
                if (input.parentNode.parentNode.nextSibling.nextSibling === button) {
                    if (button.innerHTML === "Заказать") {
                        button.innerHTML = "Отменить"
                        button.style.color = '#7A7A7A'
                        button.style.border = '1px solid #7A7A7A'
                        button.style.padding = '6px 16px'
                        input.readOnly = true
                        input.style.color = "#C9C9C9"
                    } else {
                        button.innerHTML = "Заказать"
                        button.style.color = '#000000'
                        button.style.border = '1px solid #000000'
                        button.style.padding = '6px 20px'
                        input.readOnly = false
                        input.style.color = "#000000"
                    }
                }
            } else {
                // button.style.boxShadow = '0px 5.10782px 11.4926px rgb(231 83 83 / 15%)'
                // button.style.color = 'red'
                // button.style.border = '1px solid rgb(231 83 83)'
                // setTimeout(function () {
                //     button.style.color = '#000000'
                //     button.style.border = '1px solid #000000'
                // }, 1000)
            }
        })
    })
})

//Video
const video = document.getElementsByTagName('video')[0]
const videoEl = document.querySelector('.video__element')

videoEl.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}, false)

video.addEventListener('play', function () {
    playBtn.innerHTML = "";
}, false);
video.addEventListener('pause', function () {
    playBtn.innerHTML = "<img src='../static/img/video/Vector.svg' alt=''>";
}, false)