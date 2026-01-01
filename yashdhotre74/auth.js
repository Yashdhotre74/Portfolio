// ===== CONFIG =====
const PASSWORD_HASH = "9c56cc51b374c3ba189210d5b6d4bf577c0f0f8f9c3dfb91fbd4b2f5d0b7e8d1";
// This hash is for password:Dhotreyash
// You can change later

let attempts = 0;

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!input) {
    error.textContent = "Password required";
    return;
  }

  const hash = sha256(input);

  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem("step1", "passed");
    window.location.href = "otp.html";
  } else {
    attempts++;
    error.textContent = "Incorrect password";

    if (attempts >= 3) {
      window.location.href = "/404.html";
    }
  }
}

/* ===== SHA-256 FUNCTION ===== */
function sha256(ascii) {
  return CryptoJS.SHA256(ascii).toString();
}
