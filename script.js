const users = [];

const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userIdInput = document.getElementById("userId");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");

// Function to check if all fields are filled
function checkFormValidity() {
  const isValid = nameInput.value.trim() !== "" &&
                  emailInput.value.trim() !== "" &&
                  userIdInput.value.trim() !== "" &&
                  passwordInput.value.trim() !== "";

  registerBtn.disabled = !isValid;
}

// Listen to input events on all fields
[nameInput, emailInput, userIdInput, passwordInput].forEach(input => {
  input.addEventListener("input", checkFormValidity);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const userId = userIdInput.value.trim();
  const password = passwordInput.value.trim();

  if (name && email && userId && password) {
    const user = { name, email, userId };
    users.push(user);
    displayUsers();
    form.reset();
    registerBtn.disabled = true; // Disable again after submit
  }
});

function displayUsers() {
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.userId}</td>
    `;
    tbody.appendChild(row);
  });
}
