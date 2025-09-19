// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("show"))
  );
}

// IntersectionObserver for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Lightweight client-side form validation + message
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    const msg = form.querySelector(".form-msg");
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "#ffb4b4";
      return;
    }

    // If using Formspree, allow submit to proceed.
    // If you don't have a backend yet, you can simulate a success:
    // e.preventDefault();
    // await new Promise(r => setTimeout(r, 500));
    // msg.textContent = "Thanks! Your message has been sent.";
    // msg.style.color = "#b6f0c2";
    // form.reset();
  });
}
