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