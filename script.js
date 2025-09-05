// Animated dots after "Coming Soon"
const textElement = document.querySelector(".coming-soon");
let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  textElement.textContent = "Coming Soon" + ".".repeat(dots);
}, 700);
