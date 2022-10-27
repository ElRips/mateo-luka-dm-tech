/***************************************************
 * Fonction de trie d'un tableau en
 * ordre croissant
 *
 * Input : un tableau
 * Output : un tableau trié de maniere croissante
 *
 **************************************************/

function Trie_Croissant(tableau_IN)
{
    for (var Index_tableau = tableau_IN.length-1; Index_tableau >= 0; Index_tableau--) {        

        for (var Index_precedent = Index_tableau; Index_precedent >= 0; Index_precedent--) {

            if (tableau_IN[Index_tableau] < tableau_IN[Index_precedent]) {

                var backup_valeur = tableau_IN[Index_tableau];

                tableau_IN[Index_tableau] = tableau_IN[Index_precedent];

                tableau_IN[Index_precedent] = backup_valeur;
            }    
        }
    }
      
    return tableau_IN;
}
 
 //TEST
 
var tableau_a_trier = [12,52,42,6,90,8,15,48];

console.log(Trie_Croissant(tableau_a_trier));
