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

// RANDOM SURPRISES
const surprises = [
  "System Breach Detected...",
  "Unknown Entity Observing You 👀",
  "Warning: Neural Scan Active",
  "Access Granted: Shivani.exe",
  "Secret Log Found: Only curious survive 😉",
  "Caution: Hacker Mode Activated 🔥",
  "Mission Complete: You unlocked this message!"
];

// CLICK FLOW LOGIC
let surpriseIndex = 0;
const scanBtn = document.getElementById("scanBtn");
const scanResult = document.getElementById("scanResult");
const energyLevel = document.getElementById("energyLevel");

scanBtn.addEventListener("click", () => {
    // Show next surprise
    scanResult.innerText = surprises[surpriseIndex];
    
    // Animate result
    gsap.fromTo(scanResult, {opacity:0}, {opacity:1, duration:0.6});
    gsap.fromTo(scanResult, {x:-20}, {x:0, duration:0.4, ease:"power2.out"});
    
    // Update energy randomly
    energyLevel.innerText = (Math.floor(Math.random() * 50) + 50) + "%";
    
    // Change particle color randomly
    const colors = ["#00fff2","#ff0077","#ffde59","#ff00ff"];
    document.querySelectorAll(".particles-js-canvas-el").forEach(canvas=>{
      canvas.style.filter = `hue-rotate(${Math.random()*360}deg)`;
    });
    
    // Screen shake effect
    gsap.from("body", {x:"-=5", duration:0.05, repeat:5, yoyo:true});
    
    // Move to next surprise
    surpriseIndex = (surpriseIndex + 1) % surprises.length;
});

// HOVER NAME GLITCH
const title = document.getElementById("mainName");
title.addEventListener("mouseover", ()=>{
  title.innerText = "⚡ SHIVANI.exe ⚡";
  gsap.to(title, {scale:1.2, color:"#ff0077", duration:0.3});
});
title.addEventListener("mouseout", ()=>{
  title.innerText = "SHIVANI.exe";
  gsap.to(title, {scale:1, color:"#00fff2", duration:0.3});
});
