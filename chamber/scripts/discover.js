import { places } from "./places.mjs";

const visitMessage = document.getElementById('sidebar-visit');

const currentDay = Date.now();
const lastVisit = Number(localStorage.getItem('lastVisit-ls')) || 0;

if (lastVisit === 0) {
    visitMessage.textContent = "Welcome, If you have any questions, let us know!";
}
else {
    const differenceInMs = currentDay - lastVisit;
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    if (differenceInDays < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (differenceInDays === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${differenceInDays} days ago.`;
    }
}

localStorage.setItem('lastVisit-ls', currentDay);

const cardsContainer = document.getElementById('cards-container');

places.forEach (place => {
    const card = document.createElement('section');

    const title = document.createElement('h2');
    title.textContent = place.name

    card.appendChild(title)

    const address = document.createElement('address')
    address.textContent = place.address

    card.appendChild(address);

    const img = document.createElement('img');
    img.setAttribute ("src", place.photo)
    img.setAttribute ('alt', place.name)

    card.appendChild(img)

    const description = document.createElement('p');
    description.textContent = place.description

    card.appendChild(description)


    cardsContainer.appendChild
    (card)
});
