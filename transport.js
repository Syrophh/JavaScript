const distance = 0.01, distance_max = 900, ancien_fixe = 300, ancien_up = 30;
let primeA = 0, primeD = 0; //PrimeA = Prime d'ancienneté; Prime D = Prime de distance;


/*
 Fonction qui renvoie la prime d'ancienneté
 ancien, integer qui correspond aux nombres d'années dans l'entreprise.
 */
function prime_ancien(ancien) {
    if (ancien < 4) { //condition vrai si le temps passer dans l'entreprise est inférieur à ans.
        return(primeA = 0); //Renvoie le total de la prime d'ancienneté.
    } else { //égale ou supérieur à 4 ans
        primeA = ancien_fixe;

        if (ancien > 4) { //Supérieur à 4 ans
            primeA = ancien_fixe + ((ancien - 4) * ancien_up);
        }
    }
    return primeA; //renvoie la valeur total de la prime d'ancienneté.
}

/*
 Fonction qui renvoi la prime de distance
 km, integer qui correspond aux nombre de kilomettres parcourus au courant de cette année
 */
function prime_distance(km) {
    primeD = distance * km; // Ajoute à la prime, la valeur par kilomettre parcouru
    if (primeD > 900) { //si la prime est supérieur au maximum autoriser par l'entreprise, renvoie la valeur de la prime au maximum défini.
        primeD = 900;
    }
    return primeD; //renvoi la valeur total de la prime de distance.
}

let prime = primeA + primeD; // La prime est égal à la prime de distance + la prime d'ancienneté.

function accident(acc){
    if (acc===1){
        prime = prime/2;
    }
    if (acc===2){
        prime = prime/3;
    }
    if (acc===3){
        prime = prime/4;
    }
    if (acc > 3){
        prime = 0;
    }
    return prime;
}