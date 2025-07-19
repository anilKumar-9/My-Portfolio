// Scroll to top when clicking on "Anil Kumar"
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Toggle mobile nav menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("open");
}

// Close mobile menu when link is clicked
function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("open");
}

// Optional: Add scroll reveal animations for sections
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section, .card, .timeline-item, .skill-category, .project-card, .cert-item");
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Optional: Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
