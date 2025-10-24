// Basic handlers for index.html buttons

function login(message) {
  if (typeof message === 'string' && message.length) {
    alert(message);
  } else {
    alert('Logged in');
  }
}

function sign_up(message) {
  if (typeof message === 'string' && message.length) {
    alert(message);
  } else {
    alert('Sign up clicked');
  }
}

// Expose to global scope for inline onclick handlers (already global in browsers)
window.login = login;
window.sign_up = sign_up;

// Optional: small DOM-ready example to show scripts are running
document.addEventListener('DOMContentLoaded', function () {
  var logo = document.getElementById('logo');
  if (logo && !logo.src) {
    // Placeholder in case image missing
    logo.alt = 'Average Drummer Studio Logo';
  }
});
