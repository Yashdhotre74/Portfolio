// ===== CONFIG =====
const PASSWORD_HASH = "112f43f667cfdbb8a5f904aac3e03865be79e6312eaf82cdee8a1352f565576e"; // keep your correct hash

let attempts = 0;

function checkPassword() {
  const inputEl = document.getElementById("password");
  const errorEl = document.getElementById("error");

  if (!inputEl || !errorEl) return;

  const input = inputEl.value.trim();

  if (!input) {
    errorEl.textContent = "Authentication required.";
    return;
  }

  if (typeof CryptoJS === "undefined") {
    errorEl.textContent = "Security module failed to load.";
    return;
  }

  const hash = CryptoJS.SHA256(input).toString();

  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem("step1", "passed");
    window.location.href = "otp.html";
  } else {
    attempts++;

    // 👇 YOUR CUSTOM PROFESSIONAL MESSAGE
    errorEl.innerHTML = `
      Are you <b>Yash</b>?<br>
      If not, please obtain permission from Yash before proceeding.
    `;

    if (attempts >= 3) {
      errorEl.innerHTML = `
        Access restricted.<br>
        This attempt has been logged.
      `;
    }
  }
}
