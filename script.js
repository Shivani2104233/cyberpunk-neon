// PARTICLES BACKGROUND
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 70 },
    "color": { "value": "#00fff2" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4 },
    "size": { "value": 4 },
    "line_linked": { 
      "enable": true, 
      "color": "#00fff2", 
      "opacity": 0.3 
    },
    "move": { "enable": true, "speed": 1.8 }
  }
});

// RANDOM MYSTERY MESSAGES
const msgs = [
  "System Breach Detected...",
  "Accessing Shivani's Neural Core...",
  "Warning: Unknown Entity Watching You 👀",
  "Haryana Server Activated 🤖⚡",
  "恋 — Someone is tracking your heartbeat...",
  "Alert: Shivani Took Control.",
  "Confidential Link Opened By You. WHY?",
  "Neon Protocol: तुम बच नहीं पाओगे अब…"
];

// RANDOM HARYANVI FUN-SCARY LINES
const haryanviLines = [
  "ए सुन... tere system mein ghus liya maine 😉",
  "Matlab bina permission ke page khol diya? 😏",
  "Bhai tu darr mat… bas thoda mazaak ho rha h 😎",
  "Shivani Online ↯ अब tu sambhal ke chal!",
  "Yo cyber-wali chakri teri taraf aa rahi h 🔥",
];

// PICK RANDOM LINES
function pick(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

// SET TEXTS
document.querySelector(".sub").innerHTML = pick(msgs);
document.querySelector("h1").setAttribute("data-msg", pick(haryanviLines));

// GLITCH EFFECT
gsap.from(".glow", {
  duration: 1.5,
  opacity: 0,
  scale: 0.7,
  ease: "power3.out"
});

// Hover Scare Effect on Name
const title = document.querySelector("h1");

title.addEventListener("mouseover", () => {
  title.innerHTML = title.getAttribute("data-msg");
  gsap.to(title, { 
    duration: 0.3, 
    color: "#ff0077",
    scale: 1.2,
    textShadow: "0 0 20px #ff0077"
  });
});

title.addEventListener("mouseout", () => {
  title.innerHTML = "SHIVANI YADAV";
  gsap.to(title, { 
    duration: 0.3,
    color: "#00fff2",
    scale: 1,
    textShadow: "0 0 15px #00fff2"
  });
});
