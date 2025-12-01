document.addEventListener("DOMContentLoaded", function() {

  // PARTICLES.JS CONFIG
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80 },
      "color": { "value": "#00fff2" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": { "enable": true, "color": "#00fff2", "opacity": 0.3 },
      "move": { "enable": true, "speed": 2 }
    }
  });

  const surprises = [
    "System Breach Detected...",
    "Unknown Entity Observing You 👀",
    "Warning: Neural Scan Active",
    "Access Granted: Shivani.exe",
    "Secret Log Found: Only curious survive 😉",
    "Caution: Hacker Mode Activated 🔥",
    "Mission Complete: You unlocked this message!"
  ];

  let surpriseIndex = 0;
  const scanBtn = document.getElementById("scanBtn");
  const scanResult = document.getElementById("scanResult");
  const energyLevel = document.getElementById("energyLevel");

  scanBtn.addEventListener("click", () => {
    scanResult.innerText = surprises[surpriseIndex];
    gsap.fromTo(scanResult, {opacity:0}, {opacity:1, duration:0.6});
    surpriseIndex = (surpriseIndex + 1) % surprises.length;
    energyLevel.innerText = (Math.floor(Math.random() * 50) + 50) + "%";
  });

  // Hover name effect
  const title = document.getElementById("mainName");
  title.addEventListener("mouseover", () => {
    title.innerText = "⚡ SHIVANI.exe ⚡";
    gsap.to(title, {scale:1.2, color:"#ff0077", duration:0.3});
  });
  title.addEventListener("mouseout", () => {
    title.innerText = "SHIVANI.exe";
    gsap.to(title, {scale:1, color:"#00fff2", duration:0.3});
  });

});
