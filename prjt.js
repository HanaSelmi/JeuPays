tableauPays = [
                "Azerbaïdjan",
                "Turkménistan",
                "Ouzbékistan",
                "Afghanistan",
                "Pakistan",
                "Tadjikistan",
                "Kirghizistan"
            ];

// fonction Valider
function fonctionValider(event) {
    event.preventDefault();
    //boucle sur les listes
    for (var i = 0; i < tableauPays.length; i++) {
        //récupération de l'index, puis de la valeur choisie
        var indexChoisi = document.forms["listes"].elements["liste" + i].selectedIndex;
        
        var paysChoisi = document.forms["listes"].elements["liste" + i].options[indexChoisi].value;
        
        // teste si la liste I affiche le bon pays
        if (paysChoisi === tableauPays[i]) {
            //changement de style de l'element numéro i
            document.getElementById("numero" + i).nextElementSibling.style.backgroundColor = '#00FF00';
        } else {
            document.getElementById("numero" + i).nextElementSibling.style.backgroundColor = '#FF0000';
        }
    }
}
