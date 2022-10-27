/****************************************************
 * Fonction qui recherche le plus grand des entiers
 * dans un tableau fourni en paramètre
 *
 * Entré : tableau d'entier
 * Sortie : L'entier le plus grand trouvé
 ****************************************************/

function Cherche_valeur_la_plus_grande (tableau)
{
    var Entier_le_plus_grand = 0;
    for (var index = 0 ; index <= tableau.length ; index++)
    {
        if(tableau[index] >= Entier_le_plus_grand)
        {
            Entier_le_plus_grand = tableau[index];
        }
    }

    return Entier_le_plus_grand;
}

//Test du code

let tableau_test = ['15','56','54'];

console.log(Cherche_valeur_la_plus_grande(tableau_test));

retour = prompt('Tableau fourni [\'15\',\'56\',\'54\']\n' + 'Resultat : ' , Cherche_valeur_la_plus_grande(tableau_test));
