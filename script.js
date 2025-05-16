const loginPage = document.getElementById("loginPage");
const loginForm = document.getElementById("loginForm");
const loginRole = document.getElementById("loginRole");
const logoutBtn = document.getElementById("logoutBtn");

function showOnly(section) {
  adminPanel.classList.add("hidden");
  distributorPanel.classList.add("hidden");
  userPanel.classList.add("hidden");

  if (section === "admin") adminPanel.classList.remove("hidden");
  else if (section === "distributor") distributorPanel.classList.remove("hidden");
  else if (section === "user") userPanel.classList.remove("hidden");
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const role = loginRole.value;
  loginPage.classList.add("hidden");
  document.querySelector("header").classList.remove("hidden");
  showOnly(role);
});

logoutBtn.addEventListener("click", () => {
  loginPage.classList.remove("hidden");
  document.querySelector("header").classList.add("hidden");
  adminPanel.classList.add("hidden");
  distributorPanel.classList.add("hidden");
  userPanel.classList.add("hidden");
});

roleSwitcher.addEventListener("change", () => {
  const selected = roleSwitcher.value;
  showOnly(selected);
});

// Form and Points Functionality
function showForm() {
  formContainer.classList.remove("hidden");
}

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = userForm.name.value;
  const message = userForm.message.value;
  previewContent.textContent = `Name: ${name}, Message: ${message}`;
  formPreview.classList.remove("hidden");
});

function finalSubmit() {
  let points = parseInt(userPoints.textContent);
  if (points >= 10) {
    points -= 10;
    userPoints.textContent = points;
    alert("Form submitted and 10 points deducted!");
    userForm.reset();
    formContainer.classList.add("hidden");
    formPreview.classList.add("hidden");
  } else {
    alert("Not enough points.");
  }
}
