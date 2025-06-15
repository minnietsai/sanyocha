// script.js

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("open");

    if (navLinks.classList.contains("active")) {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.justifyContent = "center";
      navLinks.style.alignItems = "center";
      navLinks.style.opacity = "0";
      navLinks.style.transition = "opacity 0.3s ease";
      requestAnimationFrame(() => {
        navLinks.style.opacity = "1";
      });
      document.body.style.overflow = "hidden"; // prevent scrolling
    } else {
      navLinks.style.opacity = "0";
      setTimeout(() => {
        navLinks.removeAttribute("style");
        document.body.style.overflow = "auto"; // re-enable scrolling
      }, 300);
    }
  });

  // Optional: close nav when a link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("open");
      navLinks.style.opacity = "0";
      setTimeout(() => {
        navLinks.removeAttribute("style");
        document.body.style.overflow = "auto"; // re-enable scrolling
      }, 300);
    });
  });
});
