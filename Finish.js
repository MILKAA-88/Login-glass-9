const pseudo = localStorage.getItem("pseudo");
if (pseudo) {
  document.getElementById("message").innerText = "Salut " + pseudo + " !";
} else {
  document.getElementById("message").innerText = "Salut invité !";
}