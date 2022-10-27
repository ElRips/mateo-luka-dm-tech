/********************************************************
 * Fonction qui retourne un tableau avec
 * les 10 entiers suivants
 *
 * Input : un entier
 * Output : un tableau contenant les 10 entiers suivants
 ********************************************************/

function Creation_tableau_10_entier_suivants(input_entier)
{
 var tableau_retour = "";
 for (var i =0 ; i<10 ; i++)
 {
    tableau_retour += input_entier++ + ' ';
 }

 return tableau_retour;
}

//test

console.log(Creation_tableau_10_entier_suivants(17));
