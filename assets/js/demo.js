const test = 'bonjour';
let test2, test3, test4 = 5;
test2 = true;
test3 = 12.3;
test4 = undefined;
// Tableaux, tableaux indéxés en php

let array = [1,2,3,4,5,6];

//OBjets littéraux, tableaux associatif en php

let object = {

    key1: 1,
    key2: 2,
    key3: 3,
}


console.log(object);
console.log(object.key1);
console.log(object['key2']);
/* */


if(object.key3 === 5){
    console.log('Yep');
} else if(object.key2 === 6){
    console.log('Ici2');

}else{
    console.log('Ici3');
}


let menu = 5;

switch (menu) {

    case 1 :
        console.log("M1");
        break;
    case 2 :
        console.log("M2");
        break;
    default :
        console.log("M3");
        break;
}

/* for(let i = 0; i > 50; i++){

    console.log(i);

}
let compteur = 0;

while (compteur <5){
    compteur++;
    console.log(compteur);
}
compteur = 0;
do{
    console.log(compteur);
} while (compteur<5);


const users = ['Paul', 'Pierre','Jean','Luc'];

for(let user of users){
    console.log(user); // Valeur
}

for (let i in users){
    console.log(i); // Index
    console.log(users[i]); // Valeur
} */

// demander une valeur à l'utilisateur

const choice = prompt('Faites vos jeux !');


// Afficher de l'info

alert(choice);

// Exercice 1 - Calculette
// 2 valeurs à l'utilisateur
// Additionner
// Afficher


/* const chiffre1= parseFloat(prompt('Entrez une première valeur'));
const chiffre2 = parseFloat(prompt('Entrez une Seconde valeur'));
const calcul = chiffre1 + chiffre2;
alert(result);*/



// Avancée : type d'opération

/* let typeOfOperator = prompt('Choisissez un opérateur parmis +,-,* et /');

switch (typeOfOperator) {

    case '+':
        calcul =parseInt(chiffre1)+parseInt(chiffre2);
        break;

    case '-':
        calcul =parseInt(chiffre1)-parseInt(chiffre2);
        break;

    case '*':

        calcul =parseInt(chiffre1)*parseInt(chiffre2);
        break;


    case '/':
        calcul =parseInt(chiffre1)/parseInt(chiffre2);
        break;


    default:
        alert("Ce n'est pas un opérateur...");

}


alert('Le résultat est '+calcul);

*/

// Très avancée
// Combien de nombre il veut saisir

const operandNumber = parseInt(prompt('Nombre d\'opérande :'));

if(isNaN(operandNumber) || operandNumber < 2){
    alert('Nombre d\'opérande invalide');
}else{
    const operator = prompt('Type d\'opération :');

    let numbers = [];
    for(let i = 0; i < operandNumber; i++){
        const number = parseFloat(prompt('Opérande ' + i + ' :'));
        numbers.push(number);
    }

    let result = numbers.shift();
    for(let number of numbers){
        switch (operator) {
            case '+':
                result += number;
                break;
            case '-':
                result -= number;
                break;
            case 'x':
            case '*':
                result *= number;
                break;
            case '/':
                result /= number;
                break;
        }
    }


    if(result !== undefined && !isNaN(result)){
        alert(result);
    }else{
        alert('Les données d\'entrée ne sont pas valides');
    }
}


console.log(total);

alert('Le résultat est '+ total);
// L'ensemble des nombres et l'opération
// Faire le calcul

if(isNaN(operandNumber) || operandNumber < 2){
    alert('Nombre d\'opérande invalide');
}else{
    let result = parseFloat(prompt('Opérande 1'));
    for(let i = 1; i < operandNumber; i++){
        const operator = prompt('Type :');
        const number = parseFloat(prompt('Opérande ' + (i + 1) + ' :'));

        switch (operator) {
            case '+':
                result += number;
                break;
            case '-':
                result -= number;
                break;
            case 'x':
            case '*':
                result *= number;
                break;
            case '/':
                result /= number;
                break;
        }
    }

    if(result !== undefined && !isNaN(result)){
        alert(result);
    }else{
        alert('Les données d\'entrée ne sont pas valides');
    }
}

function add(a, b = 1){
    return a + b;
}

let result = add(12);
alert(result);

function convertEuroToDollar(amount, rate = 1.20) {
    // Sortie valeur en dollar
}

function convertCurrency(amount, originCurrency, destinationCurrency){

}

function getCurrencyRate(originCurrecny, destinationCurrency){

}

function getPI(precision = 2){
    // Valeur de pi
}