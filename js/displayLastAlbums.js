"use strict"

function display(){
    const gallery = document.getElementById('gallery')

    album_json.reverse();
    for(let i = 0; i < 9; i++){
        const album = `
        <img src='./assets/albums/${album_json[i].img}' alt='${album_json[i].album}'> 
    `

    gallery.innerHTML += album;
    }
}
display();