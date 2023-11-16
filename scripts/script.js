// Mon exercice ---------

let faceDe = Math.floor(Math.random() * 6) + 1;
console.log("Résultat du lancer de dé :", faceDe);

const body = document.body;

let img = new Image();

if (faceDe == 1) {
  img.src = "img/image1.png";
} else if (faceDe == 2) {
  img.src = "img/image2.png";
} else if (faceDe == 3) {
  img.src = "img/image3.png";
} else if (faceDe == 4) {
  img.src = "img/image4.png";
} else if (faceDe == 5) {
  img.src = "img/image5.png";
} else if (faceDe == 6) {
  img.src = "img/image6.png";
}
body.appendChild(img);

// // Correction exercice ---------------------------
// // mettre image dans le body avec une "classe : tailleDe"

// let nombre = Math.floor(Math.random()*6 +1)
// const de = document.querySelector(".tailleDe")
// de.src = `img/de${nombre}.png`
// // la source de l'image change en fonction de la variable nombre

// // Correction Bonus ---------------------------
// // 3 images : contour6, contour12, contour20

// const de6 = document.querySelector('#de6');
// const de12 = document.getElementById('de12');
// const de20 = document.getElementById('de20');
// const de = document.querySelector(".tailleDe")
//     // variables des input

// // Comprendre comment sélectionner avec le bouton radio la bonne valeur
// let typeDe

// const lancerUnDe = document.querySelector('.lancerUnDe');

// lancerUnDe.addEventListener('mouseover', (event) => {
//   event.preventDefault();
//       // écouteurs d'évenement preventDefault permet de supprimer le comportement par défaut c-a-d au mouseour (on peut en mettre plein, click..) il se passe ça
//   let deRadio = document.getElementsByName("de");
//   for (let i = 0; i < deRadio.length; i++) {
//     if (deRadio[i].checked) {
//       typeDe = deRadio[i].value;
//     }
//   }
//       // permet d'affecter la variable typeDe à la value de l'input donc que le chiffre aille de (1 à 6) de (1 à 12) ou (1 à 20)
//   let nombre = Math.floor(Math.random() * typeDe + 1);
//   if (de6.checked) {
//     de.src = "img/contour6.png";
//   }
//   if (de12.checked) {
//     de.src = "img/contour12.png";
//   }
//   if (de20.checked) {
//     de.src = "img/contour20.png";
//   }
//       // faire en sorte que l'image s'adapte au dé checked 6, 12 ou 20
//   const selectP = document.querySelector(".nombreDe");
//   selectP.textContent = nombre;
//       // pour que le chiffre dans <p> change en fonction du nombre random
//   console.log(nombre);
// })
