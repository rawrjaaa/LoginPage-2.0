document.addEventListener("DOMContentLoaded", function () {
  const forgotPasswordBtn = document.querySelector(".forgot-password-btn");
  const forgotPasswordContainer = document.querySelector(".forgot-password-container");
  const closeBtn = document.querySelector(".close-btn");

  forgotPasswordBtn.addEventListener("click", function () {
    forgotPasswordContainer.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    forgotPasswordContainer.classList.remove("show");
  });
});