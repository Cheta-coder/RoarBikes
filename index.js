let mobileNav = document.querySelector('.mobileNav');
let hamburger = document.querySelector('.hamburger');
let closeIcon = document.querySelector('.closeIcon');

mobileNav.style.visibility = 'hidden'

hamburger.addEventListener('click', ()=>{
    mobileNav.style.visibility = 'visible'
    mobileNav.style.animation = 'example'
    mobileNav.style.width = '50%'
    hamburger.style.visibility = 'hidden'
})

closeIcon.addEventListener('click', ()=>{
    mobileNav.style.visibility ='hidden'
    hamburger.style.visibility = 'visible'
})