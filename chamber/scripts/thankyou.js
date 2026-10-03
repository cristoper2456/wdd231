const currentUrl = window.location.search;

const formData = new URLSearchParams(currentUrl);

const resultsContainer = document.querySelector("#results");

function formatDate(timestamp) {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);
    return isNaN(date) ? timestamp : date.toLocaleString();
}

if (formData.has("first")) {
    resultsContainer.innerHTML = `
        <div class="results-card">
            <h3>Applicant Information</h3>
            <p><strong>Name:</strong> ${formData.get("first")} ${formData.get("last")}</p>
            <p><strong>Organizational Title:</strong> ${formData.get("orgtitle") || "N/A"}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.get("email")}">${formData.get("email")}</a></p>
            <p><strong>Phone:</strong> ${formData.get("phone")}</p>
            <p><strong>Business Name:</strong> ${formData.get("business")}</p>
            <p><strong>Membership Level:</strong> <span class="membership-badge">${(formData.get("membership") || "N/A").toUpperCase()}</span></p>
            <p><strong>Business Description:</strong> ${formData.get("description") || "None provided"}</p>
            <p><strong>Submission Date:</strong> ${formatDate(formData.get("timestamp"))}</p>
        </div>
    `;
} else {
    resultsContainer.innerHTML = `<p>No form submission data found. Please complete the <a href="join.html">Join Form</a> first.</p>`;
}