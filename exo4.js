/*******************************************************************
 * Fonction qui retourne la somme de tous les entiers
 * precedents + nombre choisi
 *
 * Input : un entier
 * Output : la somme de tous les entiers précédents + nombre choisi
 *******************************************************************/

function cumul(entier)
{
    function cumul(entier)
    {
        var nombre_retour = 0;
        for(var i = 1 ; i <= entier ; i++)
        {
            nombre_retour += i;
        }   

        return nombre_retour;
    }

  return nombre_retour;
}

//TEST

entier_saisi = prompt('Entre un entier :');

retour = prompt('Le nombre saisi est : ' + entier_saisi + '\n Le résultat est : ' , cumul(entier_saisi));
