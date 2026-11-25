const boutonOuvrir = document.querySelector("#ouvrir-modale");
const boutonFermer = document.querySelector("#fermer-modale");
const fondModale = document.querySelector("#fond-modale");
const formulaire = document.querySelector("#formulaire-infolettre");
const champCourriel = document.querySelector("#courriel");
const contenuFormulaire = document.querySelector("#formulaire-contenu");
const confirmation = document.querySelector("#confirmation");
const boutonFermerConfirmation =
    document.querySelector("#fermer-confirmation");

function fermerModale() {
    fondModale.style.display = "none";
    formulaire.reset();
    contenuFormulaire.style.display = "block";
    confirmation.style.display = "none";
}

boutonOuvrir.addEventListener("click", function () {
    fondModale.style.display = "flex";
});

boutonFermer.addEventListener("click", fermerModale);
boutonFermerConfirmation.addEventListener("click", fermerModale);

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const courriel = champCourriel.value;

    if (courriel.indexOf("@") === -1 || courriel.indexOf(".") === -1) {
        alert("Votre courriel n'est pas valide!");
    } else {
        contenuFormulaire.style.display = "none";
        confirmation.style.display = "block";
    }
});

fondModale.addEventListener("click", function (event) {
    if (event.target === fondModale) {
        fermerModale();
    }
});