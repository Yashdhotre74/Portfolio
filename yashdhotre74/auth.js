// ===== CONFIG =====
const PASSWORD_HASH = "112f43f667cfdbb8a5f904aac3e03865be79e6312eaf82cdee8a1352f565576e";
// This hash is for password:1111111
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
