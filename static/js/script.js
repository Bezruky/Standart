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


// Кнопки card
document.querySelectorAll('.card__button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.quantity__input').forEach(input => {
            if (Number(input.value) > 0) {
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


//Popup
const popup = document.querySelectorAll('.popup')
const closePopup = document.querySelectorAll('.popup__close')
const header = document.querySelector('.header')

//Common
popup.forEach(element => {
    element.addEventListener('click', closeInner => {
        if (closeInner.target === element) {
            element.classList.replace('openPopup', 'closePopup')
            header.style.zIndex = 10
        }
    })
    closePopup.forEach(close => {
        close.addEventListener('click', () => {
            element.classList.replace('openPopup', 'closePopup')
            header.style.zIndex = 10
        })
    })
})

//Cities
document.querySelector('.address__list').addEventListener('click', () => {
    popup[0].classList.replace('closePopup', 'openPopup')
})
document.querySelectorAll('li.popup__elem a').forEach(elem => {
    elem.addEventListener('click', () => {
        popup[0].classList.replace('openPopup', 'closePopup')
    })
})

//Call
document.querySelectorAll('.phone__form').forEach(phone => {
    phone.addEventListener('click', () => {
        popup[1].classList.replace('closePopup', 'openPopup')
        header.style.zIndex = 4
    })
})

//Products
document.querySelectorAll('.card__picture img').forEach(picture => {
    picture.addEventListener('click', elem => {
        let copy = "../static" + elem.target.src.split('static').pop()
        popup[2].classList.replace('closePopup', 'openPopup')
        header.style.zIndex = 4
        popup[2].querySelector('.popup__picture img').setAttribute("src", copy)
    })
})


//Map mask
const mapMask = document.querySelector('.map__elem-mask')
mapMask.addEventListener('click', () => mapMask.classList.add('active'))


//Optimization header city
const city = document.querySelector('.address__city')
if (city.textContent.length > 10) {
    header.style.fontSize = '16px'
    link.style.margin = '0 15px'
    link.style.fontSize = '14px'
}