// toggle mega menu in the header
const megaMenu = document.querySelector("#header .mega-menu");
document.getElementById("show-mega-menu").addEventListener("click", (e) => {
  e.preventDefault();
  megaMenu.classList.toggle("show-mega-menu");

  const links = document.querySelectorAll(".mega-menu .links a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      megaMenu.classList.remove("show-mega-menu");
    });
  });
});

// skills section - animate width
const progress = document.querySelectorAll(".prog span");

const skills = document.getElementById("skills");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop) {
    progress.forEach((span) => (span.style.width = span.dataset.prog));
  } else {
    progress.forEach((span) => (span.style.width = 0));
  }
});

const latestDate = new Date("2024 3 30").getTime();

const timeDown = setInterval(() => {
  const startDate = new Date().getTime();
  const diffDate = latestDate - startDate;

  const daysFloat = diffDate / (1000 * 60 * 60 * 24);
  const days = Math.floor(daysFloat);

  const hoursFloat = (daysFloat % days) * 24;
  const hours = Math.floor(hoursFloat);

  const minutesFloat = (hoursFloat % hours) * 60;
  const minutes = Math.floor(minutesFloat);

  const seconds = Math.round((minutesFloat % minutes) * 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  if (diffDate === 0) {
    clearInterval(timeDown);
  }
}, 1000);

// back to top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  window.scrollY > 700
    ? backToTop.classList.add("show")
    : backToTop.classList.remove("show");
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// statistics count up number

const stats = document.getElementById("stats");
const statsMemebers = document.querySelectorAll("#stats .box h3");

import { CountUp } from "./countUp.min.js";

statsMemebers.forEach((el) => {
  let demo = new CountUp(el, el.dataset.stats, { enableScrollSpy: true });
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }
});
