const slides = document.querySelectorAll('.reviews__slider-items')
const lines = document.querySelectorAll('.reviews__slider-line')
const btnLeft = document.getElementById('slider-btn-left')
const btnRight = document.getElementById('slider-btn-right')
const accItems = document.querySelectorAll('.que__acc-item')
const nav = document.querySelector('.header__nav')
const menuBtn = document.querySelector('.menu__btn')
const navLinks = document.querySelectorAll('.header__nav-link')


let index = 0


const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('reviews__slider-items--active')
    }
    slides[n].classList.add('reviews__slider-items--active')
}
const activeDot = n => {
    for (line of lines) {
        line.classList.remove('reviews__slider-line--active')
    }
    lines[n].classList.add('reviews__slider-line--active')
}
const prepareCurrentSlide = ind => {
    activeSlide(index)
    activeDot(index)
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}
const prevSlide = () => {
    if (index == 0) {
        index == slides.length - 1
        prepareCurrentSlide(index)
    } else {
        index--
        prepareCurrentSlide(index)
    }
}
lines.forEach((item, indexLine) => {
    item.addEventListener('click', () => {
        index = indexLine
        prepareCurrentSlide(index)
    })
})

btnLeft.addEventListener('click', () => {
    prevSlide()
})

btnRight.addEventListener('click', () => {
    nextSlide()
})

for (item of accItems) {
    item.addEventListener('click', function () {
        if (this.classList.contains('que__acc-item--active')) {
            this.classList.remove('que__acc-item--active')
        } else {
            for (el of accItems) {
                el.classList.remove('que__acc-item--active')
            }
            this.classList.add('que__acc-item--active')
        }
    })
}
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active')
    menuBtn.classList.toggle('menu__btn--active')
})

navLinks.forEach(n => n.addEventListener('click', () => {
    nav.classList.remove('header__nav--active')
    menuBtn.classList.remove('menu__btn--active')
}))


setInterval(nextSlide, 5000)