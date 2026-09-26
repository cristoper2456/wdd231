const membersUrl = "data/members.json";

async function getSpotlightMembers() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const data = await response.json();
            

            const membersList = data.members;


            const qualifiedMembers = membersList.filter(member => 
                member.membershipLevel === "Gold" || 
                member.membershipLevel === "Silver" || 
                member.membershipLeve === 3 || 
                member.membershipLevel === 2
            );


            const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());


            const selectedMembers = shuffled.slice(0, 3);


            displaySpotlights(selectedMembers);
        }
    } catch (error) {
        console.error("Error al cargar los spotlights:", error);
    }
}

function displaySpotlights(spotlights) {
    const container = document.querySelector(".spotlights-cards");
    if (!container) return; 

    container.innerHTML = ""; 

    spotlights.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy" width="180" height="100">
            <div class="spotlight-info">
                <h3>${member.name}</h3>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
            </div>
        `;

        container.appendChild(card);
    });
}

getSpotlightMembers();