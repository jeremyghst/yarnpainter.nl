"use strict"

function display(){
    const tablebody = document.getElementById('tablebody')

    const event = `
        <tr>
            <td>${agenda_json[0].date}</td>
            <td>${agenda_json[0].time}</td>
            <td>${agenda_json[0].location}</td>
            <td>${agenda_json[0].description}</td>
        </tr>
    `

    tablebody.innerHTML += event;
}
display();
