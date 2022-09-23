const openNav = document.querySelector('.nav__menu')
const closeNav = document.querySelector('.nav__links__close')
const navLink = document.querySelector('.nav__links')

openNav.addEventListener('click', () => {
    navLink.classList.add('active')
})

closeNav.addEventListener('click', () => {
    navLink.classList.remove('active')
})


window.addEventListener('scroll', scrollNav)

function scrollNav(){

    const header = document.querySelector('header')

    if(scrollY > 20){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
}


