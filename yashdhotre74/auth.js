// ===== CONFIG =====
const PASSWORD_HASH = "48a534e64e3b91484555483f2b6bea7069261bf6b2e363b69b9bdcf2d15684fa";

let attempts = 0;

function checkPassword() {
  const inputEl = document.getElementById("password");
  const errorEl = document.getElementById("error");

  if (!inputEl || !errorEl) return;

  const input = inputEl.value.trim();

  if (!input) {
    errorEl.innerHTML = "Authentication required.";
    return;
  }

  if (typeof CryptoJS === "undefined") {
    errorEl.innerHTML = "Security module failed to load.";
    return;
  }

  const hash = CryptoJS.SHA256(input).toString();

  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem("step1", "passed");
    window.location.href = "otp.html";
  } else {
    attempts++;

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

function togglePassword() {
  const input = document.getElementById("password");
  if (!input) return;

  input.type = input.type === "password" ? "text" : "password";
}

function handleEnter(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
}
