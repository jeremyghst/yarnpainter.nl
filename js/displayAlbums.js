"use strict"

function display(){
    const gallery = document.getElementById('gallery')

    album_json.reverse();
//     album_json.forEach(a => {
//     const album = `
//         <img src="./assets/albums/${a.img}" alt='${a.album}' data-id='${a.id}'> 
//     `

//     gallery.innerHTML += album;
//    }) 


   let i = 0;
   const albumsInterval = setInterval(() => {

    if(i < album_json.length){
        const album = `
        <img src="./assets/albums/${album_json[i].img}" onclick="openModal(event)" alt='${album_json[i].album}' class='imgBtn' data-id='${album_json[i].id}'> 
        `

        gallery.innerHTML += album;
        i++;

    } else {
        clearInterval(albumsInterval);
    }

   }, 1)
}
display();