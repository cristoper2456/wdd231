// 1. Selección de elementos del DOM
const container = document.querySelector('#course-cards');
const courseDetails = document.querySelector('#course-details');

// 2. Función para mostrar los detalles en el Modal (<dialog>)
function displayCourseDetails(course) {
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal();

    // Evento para el botón X
    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', () => {
        courseDetails.close();
    });
}

// Cierre opcional: cerrar modal al hacer clic en el fondo oscuro
courseDetails.addEventListener('click', (event) => {
    if (event.target === courseDetails) {
        courseDetails.close();
    }
});

// 3. Función para renderizar las tarjetas de cursos
function displayCourses(courseList) {
    container.innerHTML = ''; // Limpia el contenedor para evitar duplicados

    courseList.forEach(course => {
        const card = document.createElement('div');
        // Asegúrate de usar la clase CSS que ya tenías para los colores
        card.classList.add('course-card'); 
        card.textContent = `${course.subject} ${course.number}`;

        // Al hacer clic en la tarjeta, abre el modal del curso actual
        card.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        container.appendChild(card);
    });
}

// 4. Llamada inicial para pintar los cursos (pasándole tu array 'courses')
displayCourses(courses);