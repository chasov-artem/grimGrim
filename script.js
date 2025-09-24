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
