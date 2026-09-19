const hamButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
    navBar.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const gridButton = document.querySelector('#grid'); 
const listButton = document.querySelector('#list'); 
const display = document.querySelector('#members');

gridButton.addEventListener('click', () => {
    display.classList.remove('list');
    display.classList.add('grid');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

const url = 'data/members.json';

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members);
        } else {
            console.error('Error al obtener los datos del JSON');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

const displayMembers = (members) => {
    display.innerHTML = ''; // Limpiar contenedor

    members.forEach((member) => {
        let card = document.createElement('section');
        
        let portrait = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let web = document.createElement('a');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        
        web.textContent = 'Visit Website';
        web.setAttribute('href', member.website);
        web.setAttribute('target', '_blank');
        web.setAttribute('rel', 'noopener');

        portrait.setAttribute('src', `images/${member.image}`);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '180');
        portrait.setAttribute('height', '100');

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);

        display.appendChild(card);
    });
};

getMembers();