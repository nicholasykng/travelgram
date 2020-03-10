locationBox = document.querySelector('section#location-box')
function getLocations() {
    fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(locations => locations.forEach((location) => {
        locationBox = document.querySelector('section#location-box')
        locationBox.innerHTML = `
        <div data-id=${location.id}>
        <div class="location-pics">
        <img src ="${location.picture}"></img>
        </div>
        <p>${location.description}</p>
        <ul data-ul-id='${location.id}'>
        </ul>
        </div>`
        location.comments.forEach(comment => {
            let dataUlId = document.querySelector(`[data-ul-id='${location.id}']`);
            const commentHTML = `<li>${comment.content}</li>`;
            dataUlId.insertAdjacentHTML('beforeend', commentHTML);

        })
    }) 
    )}
getLocations()