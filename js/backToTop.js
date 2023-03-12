const backToTop = Array.from(document.getElementsByClassName('backToTop'));

backToTop.forEach(btn => {
    btn.addEventListener('click', toTop);
})

function toTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}