"use strict"

const modal = document.getElementById('modal');
const closeBtn = Array.from(document.getElementsByClassName('closeBtn'));

closeBtn.forEach(btn => {
    btn.addEventListener('click', closeModal);
})


function closeModal(){
    modal.classList.remove('visible');
}

function openModal(event){
    const imgSrc = event.target.closest('.imgBtn').src;

    const imgContainer = document.getElementById('modalImg');

    imgContainer.src = imgSrc;

    modal.classList.add('visible');
}
