/**********************************************
 * Fonction d'inversion de chaine de caractere
 *
 * Entrée : Chaine de caractère
 * Sortie : Chaine de caractère inversée
 *
 **********************************************/

function Reverse_Chaine(chaine)
{
    var Chaine_Caractère_Retour = "";
    var Taille_chaine_a_inverser = chaine.length;

    //Boucle qui parcourt la chaine reçu en partant par la fin
    //et qui rempli la chaine a renvoyer

    for (var position = Taille_chaine_a_inverser-1 ; position >= 0 ; position--)
    {
        Chaine_Caractère_Retour += chaine[position];
    }

    //On renvoie la chaine inversée

    return Chaine_Caractère_Retour;
}

//Test de la fonction
/* console.log('Inversion de la chaine suivante : ceci_est_un_essai\n');
console.log(Reverse_Chaine('ceci_est_un_essai'));
 */

retour = prompt('Inversion de la chaine suivante : ceci_est_un_essai\n' + 'Resultat : ' , Reverse_Chaine('ceci_est_un_essai'));
