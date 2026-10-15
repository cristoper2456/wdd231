const currentUrl = window.location.href;
const urlParams = new URLSearchParams(window.location.search);

const resultsContainer = document.querySelector('#results');

const firstName = urlParams.get('first');
const lastName = urlParams.get('last');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const requestType = urlParams.get('request');
const introduction = urlParams.get('introduction');

if (resultsContainer) {
    resultsContainer.innerHTML = `
        <h3>Submitted Information Summary:</h3>
        <p><strong>Name:</strong> ${firstName || 'N/A'} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Request Type:</strong> ${requestType || 'N/A'}</p>
        <p><strong>Introduction:</strong> ${introduction || 'N/A'}</p>
    `;
}