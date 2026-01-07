const container = document.querySelector(".envelope-container");
const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");

envelope.addEventListener("click", () => {
  // Open flap
  container.classList.add("open");

  // Hide envelope so paper can be fully visible
  setTimeout(() => {
    envelope.style.display = "none";
  }, 800); // matches flap transition
});
