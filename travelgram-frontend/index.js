document.addEventListener("DOMContentLoaded", () => {
    locationBox = document.querySelector('section#location-box')
    Location.newLocationForm();
    getLocations();
    let locationId;
    getUser();
})

function getUser() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(loginUser)
}

function loginUser(usersarray) {
    usersarray.forEach((user) => {
        let loginUserSelect = document.querySelector('select#login-users');
        loginUserSelect.innerHTML += `<option value="${user.id}" user-name=${user.name}>${user.name}</option>`
    })
}

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
         addLocation.innerHTML = locationFormFields
    } 
}

function createButton() {
    let addLocation = document.querySelector('section#add_location')
    addLocation.addEventListener('submit', event => {
        event.preventDefault();
        createLocation(event.target)
    })
}

function createLocation() {

        fetch("http://localhost:3000/locations", {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({
            picture: document.getElementById('picture').value,
            description: document.getElementById("description").value,
            
        })
    })
    .then(resp => resp.json() )
    .then( (newLocation) => {
        Location.newLocationForm();
        clearLocationHtml();
        locationBox.innerHTML += `
        <div data-id=${newLocation.id}>
        <div class="location-pics">
        <img src ="${newLocation.picture}"></img>
        </div>
        <p>${newLocation.description}</p>
        <ul data-ul-id='${newLocation.id}'>
        </ul>
        </div>`
    })
}

function clearLocationHtml() {
    locationBox.innerHTML = ""
}