// je crée ma fonction Inverser avec l'argument mot
function Inverser(mot){
    // j'applique split, reverse, join à "mot" pour découper chaque caractère, les inverser et les réassembler
        return mot.split("").reverse("").join("");
    }
    
    // je définie la variable entree qui s'applique à la fonction inverser
    var entree = Inverser('Luka')
    
    // j'affiche le résultat de la fonction avec la variable entree
    console.log(entree)