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
