const heart = document.getElementById("heart");
const message = document.getElementById("message");

heart.addEventListener("click", () => {
  message.textContent = "Flo, du bisch di best";

  heart.classList.add("pop");
  setTimeout(() => heart.classList.remove("pop"), 150);
});
