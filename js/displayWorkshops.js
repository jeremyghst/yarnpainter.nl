"use strict"

function display(index){
    const gallery = document.getElementById('workshop_gallery')

    console.log(workshop_json)
    console.log(workshop_json[index], index);
    if(workshop_json[index] !== undefined){
        const workshop_div = 
        `
            <div class="workshop" data-id="${workshop_json[index].id}">
                <h2>${workshop_json[index].location} - ${workshop_json[index].date}</h2>
                <div class="workshopgallery gallery small">
 
                </div>
        `
       gallery.innerHTML += workshop_div;

       let i = 0;
        const workshop_album = document.querySelector(`.workshop[data-id="${workshop_json[index].id}"]`);

       const workshopInterval = setInterval(() => {
   
           if(i < workshop_json[index].img.length){
                workshop_album.getElementsByClassName('workshopgallery')[0].innerHTML += "<img class='imgBtn' onclick='openModal(event)' data-id=" +  workshop_json[index].id + " data-img=" + workshop_json[index].img[i] +" src='./assets/workshops/" + workshop_json[index].location.toLowerCase() + workshop_json[index].id + "/" + workshop_json[index].img[i] + "' >";                    
                i++;
       
           } else {
               clearInterval(workshopInterval);
               let next_index = index + 1;
               display(next_index);
           }   
       }, 1)
    } else {
        return;
    }
}

display(0);
