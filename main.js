document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Empêche le rechargement de la page
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Tu peux ajouter ici une condition pour vérifier email + mot de passe
  
  // Redirection vers une autre page
  window.location.href = "Finish.html"; // Change "home.html" par ta vraie page
});