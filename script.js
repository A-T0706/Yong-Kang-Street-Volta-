const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const tabs = document.querySelectorAll(".tab");
const menuItems = document.querySelectorAll(".menu-item");
const form = document.querySelector(".contact-form");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    menuItems.forEach((item) => {
      const shouldShow = category === "all" || item.dataset.category === category;
      item.classList.toggle("hidden", !shouldShow);
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("This is a student project mockup. Replace this with a real form if the business wants one.");
});
