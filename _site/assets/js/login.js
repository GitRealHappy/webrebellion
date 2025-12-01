document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('login-error');

  // Valid passwords
  const allowedPasswords = ["nick", "sam", "fia"];

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPassword = passwordInput.value.trim().toLowerCase();

      if (allowedPasswords.includes(enteredPassword)) {
        localStorage.setItem('lia_rebel_access', 'true');
        // Redirect to dashboard
        window.location.href = "/dashboard/"; 
      } else {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Access denied. Incorrect password.';
        passwordInput.value = '';
        passwordInput.focus();
      }
    });
  }
});

