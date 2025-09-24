// Open modal
function openTicketModal() {
  const modal = document.getElementById("ticketModal");

  modal.style.display = "block";

  document.body.style.overflow = "hidden";
}

// Close modal
function closeTicketModal() {
  const modal = document.getElementById("ticketModal");

  modal.style.display = "none";

  document.body.style.overflow = "auto";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("ticketModal");

  if (event.target === modal) {
    closeTicketModal();
  }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  const modal = document.getElementById("ticketModal");

  if (event.key === "Escape" && modal.style.display === "block") {
    closeTicketModal();
  }
});

// Form validation and submission
function submitForm(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form data
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  // Get values from form
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const message = formData.get("message").trim();

  // Validate name
  if (!name) {
    alert("Будь ласка, введіть ваше ім'я");
    return;
  }

  // Validate email
  if (!email) {
    alert("Будь ласка, введіть ваш email");
    return;
  }

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Будь ласка, введіть коректний email адрес");
    return;
  }

  // Validate message
  if (!message) {
    alert("Будь ласка, введіть повідомлення");
    return;
  }

  // If all validation passes, send the form
  sendFormData(name, email, message);
}

// Send form data via GET
function sendFormData(name, email, message) {
  // Create URL
  const params = new URLSearchParams({
    name: name,
    email: email,
    message: message,
  });

  // Create the URL for GET
  const url = `https://httpbin.org/get?${params.toString()}`;

  // Create a link to send GET
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.style.display = "none";

  // Add link to page, click it, then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.");

  document.getElementById("contactForm").reset();
}

// Burger menu toggle
function toggleMenu() {
  const burger = document.querySelector(".burger-menu");
  const navigation = document.querySelector(".navigation");

  burger.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Close menu when clicking on a link
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navigation a[href^="#"]');
  const burger = document.querySelector(".burger-menu");
  const navigation = document.querySelector(".navigation");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu
        burger.classList.remove("active");
        navigation.classList.remove("active");
      }
    });
  });
});
