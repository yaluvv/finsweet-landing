const slides = document.querySelectorAll('.reviews__slider-items')
const lines = document.querySelectorAll('.reviews__slider-line')
const btnLeft = document.getElementById('slider-btn-left')
const btnRight = document.getElementById('slider-btn-right')
const accItems = document.querySelectorAll('.que__acc-item')
const nav = document.querySelector('.header__nav')
const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.menu__btn-open')
const menuClose = document.querySelector('.menu__btn-close')
const navLinks = document.querySelectorAll('.header__nav-link')
const headerBtn = document.getElementById('btn-popup-header')
const popup = document.querySelector('.popup')
const popupBtnClose = document.getElementById('popup-close')
const videoBtnPopup = document.getElementById('video-popup')
const videoPopup = document.querySelector('.header__popup-video')
const videoBtnClose = document.getElementById('video-btn-close')
const video = document.querySelector('video')

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
menuOpen.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active')
    menu.classList.toggle('menu--active')
})
menuClose.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active')
    menu.classList.toggle('menu--active')
})

navLinks.forEach(n => n.addEventListener('click', () => {
    nav.classList.remove('header__nav--active')
    menu.classList.remove('menu--active')
}))

headerBtn.addEventListener('click', () => {
    popup.classList.toggle('popup--active')
})

popupBtnClose.addEventListener('click', () => {
    popup.classList.remove('popup--active')
})

popup.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.classList.remove('popup--active')
    }
})

videoBtnPopup.addEventListener('click', () => {
    videoPopup.classList.toggle('header__popup-video--active')
})
videoPopup.addEventListener('click', (e) => {
    if (e.target == videoPopup) {
        videoPopup.classList.remove('header__popup-video--active')
        video.pause()
    }
})
videoBtnClose.addEventListener('click', () => {
    videoPopup.classList.remove('header__popup-video--active')
    video.pause()
})