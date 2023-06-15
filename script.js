document.addEventListener("DOMContentLoaded", function() {
  loadViews();
});

function loadViews() {
  fetch('count.php') // Appel au fichier PHP pour récupérer le nombre de vues
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de réponse du serveur');
      }
      return response.text();
    })
    .then(data => {
      var viewCountElement = document.getElementById('viewCount');
      viewCountElement.textContent = "View : " + data;
    })
    .catch(error => {
      console.error('Une erreur s\'est produite:', error);
    });
}

  