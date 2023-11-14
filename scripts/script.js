let faceDe = Math.floor(Math.random() * 6) + 1;
console.log("Résultat du lancer de dé :", faceDe);

const body = document.body;

let img = new Image();

if (faceDe === 1) {
  img.src = "img/image1.png";
} else if (faceDe === 2) {
  img.src = "img/image2.png";
} else if (faceDe === 3) {
  img.src = "img/image3.png";
} else if (faceDe === 4) {
  img.src = "img/image4.png";
} else if (faceDe === 5) {
  img.src = "img/image5.png";
} else if (faceDe === 6) {
  img.src = "img/image6.png";
}
body.appendChild(img);

// faceDe=2 ne marchait pas voici la solution
// ChatGPT
// Il semble y avoir une confusion dans les conditions if. Vous utilisez actuellement l'opérateur d'assignation (=) au lieu de l'opérateur de comparaison (===). L'opérateur = attribue la valeur à faceDe plutôt que de vérifier son contenu. En conséquence, toutes les conditions seront toujours vraies, et seule la première branche sera exécutée.

// Modifiez vos conditions pour utiliser === pour comparer les valeurs au lieu de les attribuer.

// CODE CHATGTP
// let faceDe = Math.floor(Math.random() * 6) + 1;

// // Récupérer la référence au corps du document
// const body = document.body;

// // Tableau des chemins des images
// const cheminsImages = [
//   "img/1.png",
//   "img/2.png",
//   "img/3.png",
//   "img/4.png",
//   "img/5.png",
//   "img/6.png",
// ];

// // Créer un élément image
// let img = document.createElement("img");

// // Définir le chemin de l'image en fonction du résultat du lancer de dé
// img.src = cheminsImages[faceDe - 1]; // Soustrayez 1 car les tableaux sont indexés à partir de 0

// // Ajouter l'image au corps du document
// body.appendChild(img);
