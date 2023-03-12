"use strict"

function display(){
    const gallery = document.getElementById('gallery2')

    let limit = 12;

    if(window.innerWidth <= 600 ) limit = 12;

    const latest_workshop = workshop_json[0];
    for(let i = 0; i < limit && i < latest_workshop.img.length; i++){
        const workshop = "<img src='./assets/workshops/" + latest_workshop.location.toLowerCase() + latest_workshop.id + "/" + latest_workshop.img[i] + "' >";   


    gallery.innerHTML += workshop;
    }
}
display();