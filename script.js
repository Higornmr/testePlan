const header = document.getElementById("header");
const menu = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const carousel = document.querySelectorAll(".flex-cols-wrap");

hamburger.addEventListener("click", () => {
  header.classList.toggle("menu-active");
});

document.querySelectorAll("#navbar a").forEach((anchor) => {
  anchor.addEventListener("click", () => {
    header.classList.remove("menu-active");
  });
});

function handleResize() {
  if (
    carousel &&
    window.innerWidth < 900 &&
    carousel.classList.contains("carousel--mobile")
  ) {
    carousel.classList.remove("carousel--mobile");
  } else if (
    carousel &&
    window.innerWidth >= 900 &&
    !carousel.classList.contains("carousel--mobile")
  ) {
    carousel.classList.add("carousel--mobile");
  }
}

window.addEventListener("resize", handleResize);
handleResize();
