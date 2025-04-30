const form = document.getElementById('forgot-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from reloading

  const email = emailInput.value.trim();

  // Simple email validation
  if (email === "" || !validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate success message
  message.style.display = "block";

  // You can integrate real backend email handling here (e.g., fetch('/reset', { method: 'POST', ... }))
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}