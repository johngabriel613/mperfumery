const openNav = document.querySelector('.nav__menu')
const closeNav = document.querySelector('.nav__links__close')
const navLink = document.querySelector('.nav__links')

openNav.addEventListener('click', () => {
    navLink.classList.add('active')
})

closeNav.addEventListener('click', () => {
    navLink.classList.remove('active')
})
