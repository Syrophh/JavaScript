const nbMaxAccidents = 3;
let nbAccidents = parsInt(window.document.querySelector("#num_ancien").value);
let nbKm = parsInt(window.document.querySelector("#num_ancien").value);
let nbAncien = parsInt(window.document.querySelector("#num_ancien").value);
let primeAnnuelle = parsReal(window.document.querySelector("#num_ancien").value);
window.addEventListener("Nombre d'accidents responsables ?", nbAccidents);
if (nbAccidents > nbMaxAccidents) {
    primeAnnuelle = 0;
} else {
    window.addEventListener("Nombre d'année d'ancienneté (aanées révolues) ?", nbAncien);
    window.addEventListener("Distance parcourue (en km) ?", nbKm);
    primeAnnuelle = recupPrimeAnnuelle(recupPrimeDist(nbKm), recupPrimeAncien(nbAncien),
            nbAccidents);
}



function prime_ancien(nb) {
    const nbAncienMin = 4, primeAncienMin = 300, primeAncienSupp = 30;
    if (nb >= nbAncienMin) {
        return primeAncienMin + (nb - nbAncienMin) * primeAncienSupp;
    } else {
        return 0;
    }
}



function prime_distance(nb) {
    const primeDistMax = 900, primeDistKm = 0.01;
    indem = nb * primeDistMax;
    if (indem > primeDistMax) {
        return primeDistMax;
    } else {
        return indem;
    }
}

function recupPrimeAnnuelle(primeDist, primeAncien, nbAccidents) {

    return (primeDist + primeAncien) / (1 + nbAccidents);
}

function gestionNbAccidents(nbAccidents) {
    if (nbAccidents > 3) {
        window.document.querySelector('#acacher').style.display = 'none';
        // Si #txtTropAccidents n'existe pas, on le créé
        if (!window.document.querySelector('#txtTropAccidents')) {
            let elH3 = window.document.createElement('h3');
            elH3.id = 'txtTropAccidents';
            elH3.appendChild(window.document.createTextNode('Prime annuelle annulée, trop \n\
                                                                d\accidents !'));
            window.document.querySelector('#recueilinfos').appendChild(elH3);
        }
    } else {
        window.document.querySelector('#acacher').style.display = 'block';
        // Si #txtTropAccidents existe, on le supprime
        if (window.document.querySelector('#txtTropAccidents')) {
            window.document.querySelector('#txtTropAccidents').remove();
        }
    }
}