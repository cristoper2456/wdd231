import { saveLastFilter, getLastFilter } from './storage.js';

const currentYearElement = document.querySelector('#currentyear');
const lastModifiedElement = document.querySelector('#lastModified');

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        menuBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });
}

const modal = document.querySelector('#info-modal');
const openModalBtn = document.querySelector('#open-modal');
const closeModalBtn = document.querySelector('#close-modal');

if (modal && openModalBtn && closeModalBtn) {
    openModalBtn.addEventListener('click', () => modal.showModal());
    closeModalBtn.addEventListener('click', () => modal.close());
}

const coursesContainer = document.querySelector('#courses-container');
let allCourses = [];

async function getCourses() {
    try {
        const response = await fetch('data/courses.json');
        const data = await response.json();
        allCourses = data;
        return data;
    } catch (error) {
        console.error("Error al cargar los cursos:", error);
        return [];
    }
}

function displayCourses(coursesToDisplay) {
    if (!coursesContainer) return;
    coursesContainer.innerHTML = '';
    
    coursesToDisplay.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        
        card.innerHTML = `
            <h3>${course.name} - $${course.price}</h3>
            <p><strong>Category:</strong> ${course.category}</p>
            <p><strong>Type:</strong> ${course.type}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Status:</strong> ${course.status}</p>
            <p>${course.description}</p>
        `;
        coursesContainer.appendChild(card);
    });
}

async function initCourses() {
    if (!coursesContainer) return;
    const courses = await getCourses();
    
    const lastFilter = getLastFilter();
    if (lastFilter === 'basic') {
        displayCourses(allCourses.filter(c => c.category === 'basic'));
    } else if (lastFilter === 'technical') {
        displayCourses(allCourses.filter(c => c.category === 'technical'));
    } else {
        displayCourses(courses);
    }

    const btnAll = document.querySelector('#all');
    const btnBasic = document.querySelector('#basic');       
    const btnTechnical = document.querySelector('#technical'); 

    if (btnAll) {
        btnAll.addEventListener('click', () => {
            saveLastFilter('all');
            displayCourses(allCourses);
        });
    }

    if (btnBasic) {
        btnBasic.addEventListener('click', () => {
            saveLastFilter('basic');
            const filtered = allCourses.filter(course => course.category === 'basic');
            displayCourses(filtered);
        });
    }

    if (btnTechnical) {
        btnTechnical.addEventListener('click', () => {
            saveLastFilter('technical');
            const filtered = allCourses.filter(course => course.category === 'technical');
            displayCourses(filtered);
        });
    }
}

initCourses();

const resultsContainer = document.querySelector('#results');
if (resultsContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    resultsContainer.innerHTML = `
        <h3 style="color: var(--navy-blue); margin-top: 0;">Submitted Information Summary</h3>
        <p><strong>Name:</strong> ${urlParams.get('first') || 'N/A'} ${urlParams.get('last') || ''}</p>
        <p><strong>Email:</strong> ${urlParams.get('email') || 'N/A'}</p>
        <p><strong>Phone:</strong> ${urlParams.get('phone') || 'N/A'}</p>
        <p><strong>Request Type:</strong> ${urlParams.get('request') || 'N/A'}</p>
        <p><strong>Introduction:</strong> ${urlParams.get('introduction') || 'N/A'}</p>
    `;
}