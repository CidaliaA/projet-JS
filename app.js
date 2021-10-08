// elements du DOM(query1 element class;byid=id;tag=tout element selon class tablau puis element body rang zero)


const divVies = document.querySelector('.vies');
const message = document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const input = document.getElementById('number');
const essayerBtn =document.getElementById('essayerBtn');
const rejouerBtn= document.getElementById('rejouer');
const body= document.getElementsByTagName('body')[0];


// modeles de coeurs

const coeurVides = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';

//Fond

const bgFroid =  'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
const bgChaud =' linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)';
const bgBrulant ='linear-gradient(to top, #ff0844 0%, #ffb199 100%)';

const bgWin =' linear-gradient(to top, #f43b47 0%, #453a94 100%)';
const bloose=' linear-gradient(to right, #868f96 0%, #596164 100%)';

// Play

const play= () =>{
    // nombre aléatoire "math":random(fonction qui genere nombre aléatoire0 et 1'exclu'); 'floor'(arrondi en dessous)

    const randomNumber = Math.floor(Math.random()*101);
    const totalVies = 6;
    let vies = totalVies;
    console.log(randomNumber);
}

// actualisation à chaque essai -Toute la logique
// addEventListener declenche une action(submit),(e)represente l'element,prevenDefault:empeche l' envoi formulaire,parsIntpermet le passage "3"à 3,input (la ou la personne ecrit);return=stop;||=ou


formulaire.addEventListener('submit',(e) => {
    e.preventDefault();
    const valeurInput = parseInt (input.value);

    if(valeurInput< 0 || valeurInput > 100) return;
    
    if(valeurInput===randomNumber){
        body.style.backgroundImage=bgWin;
    }

}
