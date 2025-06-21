// Typing Effect
const typingElement = document.getElementById('typing');
const roles = ["Web Developer", "Chatbot Developer", "Game Developer", "Security Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length + 10) {
      isDeleting = true;
      setTimeout(typeRole, 1000);
      return;
    }
  }
  setTimeout(typeRole, isDeleting ? 50 : 120);
}

document.addEventListener("DOMContentLoaded", typeRole);

// Project Modal
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const viewCodeBtn = document.getElementById("view-code");
const viewAppBtn = document.getElementById("view-app");
const modalCloseBtn = modal.querySelector(".modal-close");

const projectDetails = [
  {
    title: "Secure User Authentication System",
    image: "images/project1.jpg",
    description: "Secure sign-up and login system using PHP and MySQL with validation and encryption.",
    technologies: "HTML, CSS, JavaScript, PHP, MySQL",
    codeLink: "https://github.com/anshubagri/Secure-User-Authentication",
    appLink: "https://secure-user-authentication-1-ebpa.onrender.com"
  },
  {
    title: "Password Strength Analyzer",
    image: "images/project2.jpg",
    description: "Real-time entropy-based strength analyzer with suggestions.",
    technologies: "HTML, CSS, JavaScript",
    codeLink: "https://github.com/anshubagri/Password-Strength-Analyzer-and-Auto-Suggester",
    appLink: "https://password-strength-analyzer-and-auto.onrender.com"
  },
  {
    title: "Aurora Chatbot",
    image: "images/project3.jpg",
    description: "Smart chatbot interface supporting multiple inputs.",
    technologies: "HTML, CSS, JS",
    codeLink: "https://github.com/anshubagri/ChatBot",
    appLink: "https://jazzy-crostata-d35ec2.netlify.app/"
  },
  {
    title: "Rock Paper Scissors Game",
    image: "images/project4.jpg",
    description: "Classic game with modern UI and animations.",
    technologies: "HTML, CSS, JavaScript",
    codeLink: "https://github.com/anshubagri/Rock-Paper-Scissors",
    appLink: "https://earnest-dragon-85d1fb.netlify.app/"
  }
];

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const index = parseInt(card.getAttribute("data-index"));
    const project = projectDetails[index];

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalDescription.textContent = project.description;
    modalTech.textContent = project.technologies;
    viewCodeBtn.href = project.codeLink;
    viewAppBtn.href = project.appLink;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Rotating lights animation
const rotatingLights = document.querySelector(".rotating-lights");
if (rotatingLights) {
  let angle = 0;
  setInterval(() => {
    angle = (angle + 1) % 360;
    rotatingLights.style.transform = `rotate(${angle}deg)`;
  }, 20);
}

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
