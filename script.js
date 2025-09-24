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
