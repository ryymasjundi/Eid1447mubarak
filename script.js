// Bintang
for (let i = 0; i < 80; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    document.body.appendChild(star);
}

// Kembang api
setInterval(() => {
    let fire = document.createElement("div");
    fire.className = "firework";
    fire.style.top = Math.random() * 80 + "%";
    fire.style.left = Math.random() * 100 + "%";
    fire.style.background = "hsl(" + Math.random() * 360 + ",100%,50%)";

    document.body.appendChild(fire);

    setTimeout(() => fire.remove(), 1500);
}, 300);

// Amplop
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    // Play musik setelah klik
    music.src += "&autoplay=1";

    setTimeout(() => {
        envelope.classList.add("fade-out");
    }, 1000);

    setTimeout(() => {
        envelope.style.display = "none";
    }, 2000);
});
