// GLOBAL VARIABLES AND FUNCTIONS
const PORT = 8001 || 8000;
const apiBaseUrl = `http://localhost:${PORT}/`;
const errorDiv = $(".error");

const hideErrorDiv = () => {
  setTimeout(() => {
    errorDiv.removeClass("show");
    errorDiv.removeClass("success");
    errorDiv.text("");
  }, 4000);
};

const toggleDisable = (btn) => {
  setTimeout(() => {
    btn.disabled = false;
  }, 1800);
};
// END OF GLOBAL

const requestModal = document.querySelector(".new-request");
const requestLink = document.querySelector(".add-request");

requestLink.addEventListener("click", () => requestModal.classList.add("open"));

requestModal.addEventListener("click", (event) => {
  if (event.target.classList.contains("new-request"))
    requestModal.classList.remove("open");
});
