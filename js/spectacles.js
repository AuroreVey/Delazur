// Sélection des éléments dans le html avec queryselector
const boutonOuvrir = document.querySelector("#ouvrir-modale");
const boutonFermer = document.querySelector("#fermer-modale");
const fondModale = document.querySelector("#fond-modale");
const formulaire = document.querySelector("#formulaire-infolettre");
const champCourriel = document.querySelector("#courriel");
const contenuFormulaire = document.querySelector("#formulaire-contenu");
const confirmation = document.querySelector("#confirmation");
const boutonFermerConfirmation = document.querySelector("#fermer-confirmation");

// Format valide : texte@domaine.extension, sans espace
const regexCourriel = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ouvre la modale et place le focus dans le champ courriel
function ouvrirModale() {
    fondModale.style.display = "flex";
    champCourriel.focus();
}

// Ferme la modale, remet le formulaire à zéro et redonne le focus au bouton d'ouverture
function fermerModale() {
    fondModale.style.display = "none";
    formulaire.reset();
    contenuFormulaire.style.display = "block";
    confirmation.style.display = "none";
    boutonOuvrir.focus();
}

// Les event listener pour ouvrir , fermer et confirmer modale
boutonOuvrir.addEventListener("click", ouvrirModale);
boutonFermer.addEventListener("click", fermerModale);
boutonFermerConfirmation.addEventListener("click", fermerModale);

// Validation à la soumission
formulaire.addEventListener("submit", function (event) {
    event.preventDefault(); // empêche le rechargement de la page

// Permet de retirer les espace ajouté autour de l'adresse courriel
    const courriel = champCourriel.value.trim();

    if (!regexCourriel.test(courriel)) {
        // Courriel invalide : alerte, puis retour au champ
        alert("Votre courriel n'est pas valide!");
        champCourriel.focus();
    } else {
        // Courriel valide : on remplace le formulaire par le message de remerciements
        contenuFormulaire.style.display = "none";
        confirmation.style.display = "block";
        boutonFermerConfirmation.focus();
    }
});

// Clic sur le fond sombre (hors de la fenêtre) : fermeture
fondModale.addEventListener("click", function (event) {
    if (event.target === fondModale) {
        fermerModale();
    }
});

// Touche Échap : fermeture, seulement si la modale est ouverte
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && fondModale.style.display === "flex") {
        fermerModale();
    }
});