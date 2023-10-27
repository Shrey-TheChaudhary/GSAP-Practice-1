const restartButton = document.getElementById("restart-button");
const reverseButton = document.getElementById("reverse-button");

const tween = gsap.fromTo(
  ".card",
  { opacity: 0, y: 200},
  { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
);

// play, pause, resume, reverse, restart
restartButton.addEventListener("click", () => {
  tween.restart();
});
reverseButton.addEventListener("click", () => {
  tween.reverse();
});