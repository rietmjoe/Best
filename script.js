const heart = document.getElementById("heart");
const message = document.getElementById("message");

function spawnHearts(x, y, count = 10) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.textContent = "💖";

    // leichte Streuung
    const dx = (Math.random() - 0.5) * 80; // -40..40 px
    const dy = Math.random() * 30;         // 0..30 px
    const delay = Math.random() * 120;     // 0..120 ms

    p.style.left = `${x + dx}px`;
    p.style.top = `${y + dy}px`;
    p.style.animationDelay = `${delay}ms`;

    document.body.appendChild(p);

    // nach Animation wieder entfernen
    setTimeout(() => p.remove(), 1100);
  }
}

heart.addEventListener("click", (e) => {
  message.textContent = "Du bisch di best";

  // Klick-Position ermitteln (Mitte vom Herz)
  const rect = heart.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Pop-Effekt zusätzlich zum Puls
  heart.classList.add("pop");
  setTimeout(() => heart.classList.remove("pop"), 150);

  // Partikel
  spawnHearts(x, y, 12);
});
