// PARTICLES.JS CONFIG
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#ff00ff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "color": "#ff00ff", "opacity": 0.4 },
    "move": { "enable": true, "speed": 2 }
  }
});

// TABLE LOGIC
function getStatusClass(status) {
    if (status === "Submitted") return "green";
    if (status === "Pending") return "yellow";
    if (status === "Missing Docs") return "red";
    return "";
}

function loadTable() {
    const tbody = document.getElementById("tenderBody");
    tenders.forEach((t, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${t.name}</td>
            <td><span class="status ${getStatusClass(t.status)}">${t.status}</span></td>
            <td>${t.value}</td>
            <td>${t.deadline}</td>
        `;
        tbody.appendChild(row);

        // Animate each row with GSAP
        gsap.from(row, {duration: 1, y: 50, opacity: 0, delay: index * 0.2, ease: "power2.out"});
    });
}

loadTable();

