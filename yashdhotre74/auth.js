// ===== CONFIG =====
const PASSWORD_HASH = "7909b1ba715531cd94ceecf0e45d0def33b1e97dc7a9cd027fc1c34c70890df3";

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
