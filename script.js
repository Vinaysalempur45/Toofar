const videoCon = document.querySelector(".video-container");
const playBtn = document.querySelector(".play");
const astro = document.querySelector(".astro");
const blueBall = document.querySelector(".blue-ball");
const main = document.querySelector("#main");
const plt = document.querySelector(".plt");

videoCon.addEventListener("mouseenter", function () {
  gsap.to(playBtn, {
    scale: 1,
    opacity: 1,
  });
});

videoCon.addEventListener("mouseleave", function () {
  gsap.to(playBtn, {
    scale: 0,
    opacity: 0,
  });
});

videoCon.addEventListener("mousemove", function (dets) {
  gsap.to(playBtn, {
    left: dets.x - 10,
    top: dets.y - 100,
  });
});

gsap.from(".mid h1", {
  y: 30,
  opacity: 0,
  delay: 0.4,
  stagger: 0.4,
  duration: 0.8,
});

gsap.from(".mid .video-container", {
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
});
astro.addEventListener("mouseenter", function () {
  gsap.to(blueBall, {
    scale: 1,
    opacity: 1,
  });
});

astro.addEventListener("mouseleave", function () {
  gsap.to(blueBall, {
    scale: 0,
    opacity: 0,
  });
});

astro.addEventListener("mousemove", function (dets) {
  gsap.to(blueBall, {
    left: dets.x - 10,
    top: dets.y - 100,
  });
});
