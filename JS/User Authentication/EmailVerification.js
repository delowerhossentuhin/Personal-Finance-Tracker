const form = document.getElementById("verify-form");
const input = document.getElementById("verification-code");
const message = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const code = input.value.trim();

  // Simulate code check (in real apps, compare with server-generated OTP)
  const validCode = "123456"; // Replace with server response if needed

  if (code === validCode) {
    message.style.display = "block";

    // Simulate redirect after success
    setTimeout(() => {
      window.location.href = "reset-password.html"; // Next step
    }, 2000);
  } else {
    alert("Invalid verification code. Please try again.");
    input.focus();
  }
});
