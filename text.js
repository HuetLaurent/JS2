//tableaux

//exercice 1

/*let fruits = ["pomme", "citron", "orange", "banane", "ananas", "poire", "kiwi"];

for(let i = 0 ; i < fruits.length ; i++) {
    console.log(fruits[0+i]);
}*/

//exercice 2

/*let jours = ["lun", "mra", "mer", "jeu", "ven", "sam", "ddi"];

let jours2 = jours.pop();

console.log(jours);

let jours3 = jours.push("dim");

jours[1] = "mar";

console.log(jours[2]);*/

//exercice 3

/*let wanted_fruits = prompt("Quel fruits désirez vous ?");

if (wanted_fruits == fruits[0]) {

    window.alert(`merci pour votre commande : ` + fruits[0]);

    let removedItem = fruits.shift();
    
    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else if (wanted_fruits == fruits[1]) {

    window.alert(`merci pour votre commande : ` + fruits[1]);

    let removedItem = fruits.splice(1, 1);

    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else if (wanted_fruits == fruits[2]) {

    window.alert(`merci pour votre commande : ` + fruits[2]);

    let removedItem = fruits.splice(2, 1);

    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else if (wanted_fruits == fruits[3]) {

    window.alert(`merci pour votre commande : ` + fruits[3]);

    let removedItem = fruits.splice(3, 1);

    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else if (wanted_fruits == fruits[4]) {

    window.alert(`merci pour votre commande : ` + fruits[4]);

    let removedItem = fruits.splice(4, 1);

    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else if (wanted_fruits == fruits[5]) {

    window.alert(`merci pour votre commande : ` + fruits[5]);

    let removedItem = fruits.splice(5, 1);

    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else if (wanted_fruits == fruits[6]) {

    window.alert(`merci pour votre commande : ` + fruits[6]);

    let removedItem = fruits.splice(6, 1);

    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else if (wanted_fruits == fruits[7]) {

    window.alert(`merci pour votre commande : ` + fruits[7]);

    let removedItem = fruits.pop();

    for(let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[0+i]);
    }

} else {
    window.alert("fruit invalide.");

    console.log("fruit invalide.");
}*/

//exercice 4

/*let classe1 = [{eleve : "Phaerys", note : [12, 14, 12, 18]}, {eleve : "Astrid", note : [18, 17, 10, 17]}, {eleve : "Jéjé", note : [10, 9, 12, 15]}];

let classe2 = [{eleve : "Reyzel", note : [15, 17, 2, 13]}, {eleve : "Darcanin", note : [9, 9, 17, 15]}, {eleve : "Kasa", note : [12, 12, 12, 15]}];

// calculer la moyenne : la somme de tout les nombres par le nombre de nombre présent 

let moyenne_eleve = (a) => {
    let moyenne1 = (a[0].note[0] + a[0].note[1] + a[0].note[2] + a[0].note[3]) / a[0].note.length;
    let moyenne2 = (a[1].note[0] + a[1].note[1] + a[1].note[2] + a[1].note[3]) / a[1].note.length;
    let moyenne3 = (a[2].note[0] + a[2].note[1] + a[2].note[2] + a[2].note[3]) / a[2].note.length;

    console.log(a[0].eleve + `, ` + moyenne1);
    console.log(a[1].eleve + `, ` + moyenne2);
    console.log(a[2].eleve + `, ` + moyenne3);
}

moyenne_eleve(classe1);

moyenne_eleve(classe2);

let moyenne_classe = (a) => {
    let moyenne1 = a[0].note[0] + a[0].note[1] + a[0].note[2] + a[0].note[3];
    let moyenne2 = a[1].note[0] + a[1].note[1] + a[1].note[2] + a[1].note[3];
    let moyenne3 = a[2].note[0] + a[2].note[1] + a[2].note[2] + a[2].note[3];

    let moyenne4 = (moyenne1 + moyenne2 + moyenne3) / (a[0].note.length + a[1].note.length + a[2].note.length);

    console.log(`moyenne de classe ; ` + moyenne4);
}

moyenne_classe(classe1);

moyenne_classe(classe2);

let classe_vainqueur = (a, b) => {
    let moyenne1 = a[0].note[0] + a[0].note[1] + a[0].note[2] + a[0].note[3];
    let moyenne2 = a[1].note[0] + a[1].note[1] + a[1].note[2] + a[1].note[3];
    let moyenne3 = a[2].note[0] + a[2].note[1] + a[2].note[2] + a[2].note[3];

    let moyenne4 = (moyenne1 + moyenne2 + moyenne3) / (a[0].note.length + a[1].note.length + a[2].note.length);

    let moyenne1bis = b[0].note[0] + b[0].note[1] + b[0].note[2] + b[0].note[3];
    let moyenne2bis = b[1].note[0] + b[1].note[1] + b[1].note[2] + b[1].note[3];
    let moyenne3bis = b[2].note[0] + b[2].note[1] + b[2].note[2] + b[2].note[3];

    let moyenne4bis = (moyenne1bis + moyenne2bis + moyenne3bis) / (b[0].note.length + b[1].note.length + b[2].note.length);

    if (moyenne4 > moyenne4bis) {
        console.log("La meilleur classe est la première !")
    } else if (moyenne4 < moyenne4bis) {
        console.log("La meilleur classe est la deuxième !")
    }
}

classe_vainqueur(classe1, classe2)*/

//exercice 5

/*let num = [1, 78, 154, 28, 71];

let maximum = (a) => {
    let max = a[0];
    for(let i = 0 ; i < a.length ; i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
console.log(max);
}

maximum(num);

//exercice 6

let miror = (a) => {
    let miror = [a[0]];
    for(let i = 1 ; i < a.length ; i++) {
        miror.push(a[i]);
    }
    for(let i = a.length - 2 ; i >= 0 ; i--) {
        miror.push(a[i]);
    }
    console.log(miror);
}

miror(num);*/