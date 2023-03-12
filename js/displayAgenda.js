"use strict"

function display(){
    const tablebody = document.getElementById('tablebody')

    agenda_json.forEach(agenda => {

        const event = `
            <tr>
                <td>${agenda.date}</td>
                <td>${agenda.time}</td>
                <td>${agenda.location}</td>
                <td>${agenda.description}</td>
            </tr>
        `

        tablebody.innerHTML += event;

    })
}
display();