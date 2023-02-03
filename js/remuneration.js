const fixe = 1100;
const prixXS = 350;
const prixMulti = 180;
const prixS20 = 140;
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value);
let qteS20 = parseInt(window.document.querySelector("#num_ancien").value);
let qteXS = parseInt(window.document.querySelector("#num_ancien").value);
let qteMulti = parseInt(window.document.querySelector("#num_ancien").value);
Remuneration = fixe + primeAncien(nbAncien, fixe) + comS20(qteS20) + comXS(qteXS) + comMulti(qteMulti);

function primeAncien(nbAncien, fixe) {
    if (nbAncien >= 5 && nbAncien <= 9) {
        return fixe * 1.03;
    } else if (nbAncien >= 10) {
        return fixe * 1.06;
    }
}

function comS20(qteS20) {
    txComS20 = 0.02;
    return qteS20 * prixS20 * txComS20;
}

function comXS(qteXS) {
    txComXS = 0.06;
    if (qteXS > 50) {
        return (qteXS - 50) * prixXS * txComXS;
    }
}

function comMulti(nb) {
    const nbMultiTranche1 = 20, nbMultiTranche2 = 50;
    const txMultiTranche1 = 0.04, txMultiTranche2 = 0.06, txMultiTranche3 = 0.1;
    if (nb <= nbMultiTranche1) {
        return (nb * prixMulti * txMultiTranche1);
    } else if (nb <= nbMultiTranche2) {
        return ((nbMultiTranche1 * prixMulti * txMultiTranche1)
                + ((nb - nbMultiTranche1) * prixMulti * txMultiTranche2));
    } else {
        return ((nbMultiTranche1 * prixMulti * txMultiTranche1)
                + ((nbMultiTranche2 - nbMultiTranche1) * prixMulti * txMultiTranche2)
                + ((nb - nbMultiTranche2) * prixMulti * txMultiTranche3));
    }
}

window.addEventListener("load", function () {

    window.document.querySelector("#btn_calculer").addEventListener("click", function () {
        // Déclaration des constantes
        const fixe = 1100.0;

        // Déclaration et affectation des variables
        let nbAncien = parseInt(window.document.querySelector("#num_ancien").value);
        let nbS20 = parseInt(window.document.querySelector("#num_s20").value);
        let nbXS = parseInt(window.document.querySelector("#num_xs").value);
        let nbMulti = parseInt(window.document.querySelector("#num_multi").value);
        let remuneration = fixe + recupPrimeAnciennete(nbAncien, fixe)
                + recupComS20(nbS20) + recupComXS(nbXS)
                + recupComMulti(nbMulti);
        // Affichage du résultat
        window.document.querySelector("#remuneration").innerHTML =
                "La rémunération sera de : " + remuneration + " €";
    });
});

window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");
    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {
        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("keyup", calcRemu);
    }
});

/**
 * Fonction principale qui s'occupe de récupérer les valeurs, calculer le montant
 * de la rémunération et qui s'occupe ensuite de l'afficher
 * 
 * @returns {undefined}
 */
function calcRemu() {
    // Déclaration des constantes
    const fixe = 1100.0;
    // Déclaration et affectation des variables
    let km = recupValeur("#num_km");

    let nbAncien = recupValeur("#num_ancien");
    let nbS20 = recupValeur("#num_s20");
    let nbXS = recupValeur("#num_xs");
    let nbMulti = recupValeur("#num_multi");
    let remuneration = fixe + recupPrimeAnciennete(nbAncien, fixe) + recupComS20(nbS20)
            + recupComXS(nbXS) + recupComMulti(nbMulti) + recupIndemKm(km);
    // Affichage du résultat
    afficheRemu(remuneration);
}
/**
 * Fonction qui retourne un entier depuis une valeur prise dans le DOM
 * 
 * @param {String} id
 * @return {integer}
 */
function recupValeur(id) {
    return parseInt(window.document.querySelector(id).value);
}

/**
 * Fonction qui affiche la rémunération dans l'élément d'id "remuneration"
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheRemu(nombre) {
    window.document.querySelector("#remuneration").innerHTML =
            "La rémunération sera de : " + nombre + " €";
}

/**
 * Fonction qui retourne l'indemnité kilométrique
 * @param {type} nb
 * @returns {float}
 */
function recupIndemKm(nb) {
    const prix = 0.15, plafond = 350;
    let indem = nb * prix;
    if (indem > plafond) {
        return plafond;
    } else {
        return indem;
    }
}