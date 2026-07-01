// Mobile menu

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("menu-open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Estimate form

const estimateForm = document.querySelector(".estimate-form");

estimateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = estimateForm.querySelector('[name="name"]').value.trim();
  const phone = estimateForm.querySelector('[name="phone"]').value.trim();
  const service = estimateForm.querySelector('[name="service"]').value;

  if (!name || !phone || !service) {
    alert("Please fill out your name, phone number, and service needed.");
    return;
  }

  alert(
    "Thanks, " +
      name +
      "! Your quote request is ready. We will connect this form to email once the site is published."
  );

  estimateForm.reset();
});
