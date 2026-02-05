const heart = document.getElementById("heart");
const message = document.getElementById("message");

function spawnHearts(x, y, count = 12) {
  const emojis = ["💖", "💗", "❤️‍🔥", "✨"];
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Drift links/rechts + kleine Start-Streuung
    const dx = (Math.random() - 0.5) * 140; // -70..70
    const startX = x + (Math.random() - 0.5) * 20;
    const startY = y + (Math.random() - 0.5) * 10;

    p.style.left = `${startX}px`;
    p.style.top = `${startY}px`;
    p.style.setProperty("--dx", `${dx}px`);
    p.style.animationDelay = `${Math.random() * 90}ms`;

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}

heart.addEventListener("click", () => {
  message.textContent = "Flo, du bisch di best";
  message.classList.add("show");

  heart.classList.add("pop");
  setTimeout(() => heart.classList.remove("pop"), 160);

  const rect = heart.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  spawnHearts(x, y, 14);
});
