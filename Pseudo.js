document.getElementById("pseudoForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Empêche le rechargement
  const pseudo = document.getElementById("pseudo").value;
  
  // Enregistrer dans localStorage
  localStorage.setItem("pseudo", pseudo);
  
  // Rediriger vers la page Finish
  window.location.href = "Finish.html";
});