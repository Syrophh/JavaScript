const primePlafond = 900, primeDistance = 0, premierAncien = 300;
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value);

function primeAncien(nbAncien, premierAncien) {
    if (nbAncien >= 4) {
        nbAncien -= 4;
        return nbAncien * 30 + premierAncien;
    }
    else{
        return 0;
    }       
}