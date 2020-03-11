document.addEventListener("DOMContentLoaded", () => {
    locationBox = document.querySelector('section#location-box')
    Location.newLocationForm();
    getLocations();
})
function getLocations() {
    fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(locations => locations.forEach((location) => {
        const locationHTML = `
        <div data-id=${location.id}>
        <div class="location-pics">
        <img src ="${location.picture}"></img>
        </div>
        <p>${location.description}</p>
        <ul data-ul-id='${location.id}'>
        </ul>
        </div>`
        locationBox.insertAdjacentHTML('beforeend', locationHTML);
        location.comments.forEach(comment => {
            let dataUlId = document.querySelector(`[data-ul-id='${location.id}']`);
            const commentHTML = `<li>${comment.content}</li>`;
            dataUlId.insertAdjacentHTML('beforeend', commentHTML);

        })
    }) 
    )}

const locationFormFields = `
    <form>
    <label>Picture URL</label><br>
    <input type="text" id="picture"><br>
    <label>Description</label><br>
    <input type="textarea" id="description"><br>
    <input type="submit" value="Add New Location"><br>
    </form>
    `
class Location {
    constructor(picture, description) {
        this.picture = picture
        this.description = description
    }
    static newLocationForm() {
         let addLocation = document.querySelector('section#add_location')
         addLocation.innerHTML = `<form onsubmit="createLocation(); return false;">` + locationFormFields
    } 
}

function createLocation() {
    const location = {
        picture: document.getElementById('picture').value,
        description: document.getElementById("description").value
    };
    fetch('http://localhost:3000/locations', {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(location),
    })
    .then(response => response.json())
    .then(location => {
        Location.newLocationForm();
        clearLocationHtml();
        getLocations();
    })
}

function clearLocationHtml() {
    locationBox.innerHTML = ""
}