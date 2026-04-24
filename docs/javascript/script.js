/* Burgermenü */
function burger() {
  const btn = document.getElementById("burger");
  const nav = document.getElementById("navBar");
  btn.classList.toggle("is-active");
  nav.classList.toggle("hidden");
}
