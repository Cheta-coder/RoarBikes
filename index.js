let mobileNav = document.querySelector('.mobileNav');
let hamburger = document.querySelector('.hamburger');
let closeIcon = document.querySelector('.closeIcon');
let slideIndex = 1;
// showSlides(slideIndex);

mobileNav.style.visibility = 'hidden'

hamburger.addEventListener('click', ()=>{
    mobileNav.style.visibility = 'visible'
    mobileNav.style.animation = 'example'
    mobileNav.style.width = '50%'
    hamburger.style.visibility = 'hidden'
})

closeIcon.addEventListener('click', ()=>{
    mobileNav.style.visibility ='hidden'
    hamburger.style.visibility = 'visible';
});

// Next or previous controls
let plusSlides = (n)=> {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
let currentSlide = (n) => {
    showSlides(slideIndex = n);
}

// let showSlides = (n)=> {
//     let i;
//     let slides = document.querySelectorAll('.mySlide')
//     let dots = document.querySelectorAll('.dot')
//     if (n > slides.length){slideIndex =1}
//     if (n < 1){slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += "active";
// }

// let showSlides = ()=>{
//     let i;
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length){slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000)
//     // Change image every 2 seconds
// }