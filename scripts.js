gsap.registerPlugin(ScrollTrigger);

// Parallax background
gsap.to(".back", {
  y: 150,
  scrollTrigger: { scrub: true }
});

gsap.to(".mid", {
  y: 100,
  scrollTrigger: { scrub: true }
});

gsap.to(".front", {
  y: 50,
  scrollTrigger: { scrub: true }
});

// Section animation
gsap.utils.toArray(".section").forEach(sec => {
  gsap.from(sec, {
    opacity: 0,
    y: 80,
    scrollTrigger: {
      trigger: sec,
      start: "top 80%"
    }
  });
});



/* ===============================
   AUDIO SYSTEM (MODERN)
================================ */

const ambient = document.getElementById("ambient");
const clickSound = document.getElementById("clickSound");
const hoverSound = document.getElementById("hoverSound");

let audioActivated = false;

// Aktifkan audio setelah interaksi pertama
function activateAudio(){
  if(!audioActivated){
    ambient.volume = 0.25;
    ambient.play().catch(()=>{});
    audioActivated = true;
  }
}

// Trigger interaksi pertama
window.addEventListener("click", activateAudio, { once:true });
window.addEventListener("scroll", activateAudio, { once:true });

// Klik sound (button & card)
document.querySelectorAll(".btn, .krida-card").forEach(el=>{
  el.addEventListener("click", ()=>{
    clickSound.currentTime = 0;
    clickSound.volume = 0.6;
    clickSound.play();
  });
});

// Hover premium (desktop only)
document.querySelectorAll(".krida-card").forEach(card=>{
  card.addEventListener("mouseenter", ()=>{
    if(window.innerWidth > 768){
      hoverSound.currentTime = 0;
      hoverSound.volume = 0.3;
      hoverSound.play();
    }
  });
});

// Fade ambient saat popup terbuka
popup.addEventListener("click", ()=>{
  ambient.volume = 0.12;
});

// Restore volume saat popup ditutup
close.onclick = ()=>{
  popup.style.display = "none";
  ambient.volume = 0.25;
};

cards.forEach(card=>{
  card.addEventListener("click",()=>{
    cards.forEach(c=>c.classList.remove("active"));
    card.classList.add("active");
  });
});

