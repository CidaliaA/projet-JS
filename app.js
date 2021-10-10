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

//Fond(bg=backgroud)

const bgFroid =  'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
const bgChaud =' linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)';
const bgBrulant ='linear-gradient(to top, #ff0844 0%, #ffb199 100%)';

const bgWin =' linear-gradient(to top, #f43b47 0%, #453a94 100%)';
const bloose=' linear-gradient(to right, #868f96 0%, #596164 100%)';


// initialisation jeux

// Play (fonction fleche fonction compact et rapide )

const play= () =>{

    // constvies=fixe;letvies=evolue
    // nombre aléatoire "math":random(fonction qui genere nombre aléatoire0 et 1'exclu'); 'floor'(arrondi en dessous)

    const randomNumber = Math.floor(Math.random()*101);
    const totalVies = 6;
     let vies = totalVies;

    // let vies = 4; exemple

    console.log(randomNumber);


    // actualisation à chaque essai -Toute la logique
    
    // addEventListener declenche une action(submit),(e)represente l'element sur lequel l' action est envoyé,prevenDefault:empeche l' envoi formulaire,parsIntpermet le passage "3"à 3,input (la ou la personne ecrit);return=stop;||=ou


    formulaire.addEventListener('submit',(e) => {
    e.preventDefault();
    const valeurInput = parseInt (input.value);

    if(valeurInput< 0 || valeurInput > 100) return;

    // ``?(alt gr + 7) permet de rajouter des variables directement ds le text;{}affiche la variable;display block affiche boutton jeu; "==="egalite stricte

    if(valeurInput===randomNumber){
        body.style.backgroundImage=bgWin;
        message.textContent=`BRAVO !!! Le nombre était bien $ {randomNumber}`;
        rejouerBtn.style.display = "block";
        essayerBtn.setAttribute("disabled","");
    }
    // systeme chaud/froid

    // "!==": differente;&&=et en meme tps;attention valeurs strictes(2+1(3))?;emoji fonctionnement??

    if (valeurInput !== randomNumber) {
        if(randomNumber < valeurInput + 3 && randomNumber> valeurInput - 3){
            body.style.backgroundImage=bgBrulant;
            message.textContent = "C'est Brûlant !!!: ";
        }else if(randomNumber < valeurInput + 6 && randomNumber> valeurInput - 6){
            body.style.backgroundImage=bgBrulant;
            message.textContent = "C'est Chaud!  ";
        }else if(randomNumber < valeurInput + 11 && randomNumber> valeurInput - 11){
            body.style.backgroundImage=bgBrulant;
            message.textContent = "C'est tiède  ";
        }else { 
            body.style.backgroundImage = bgFroid;
            message.textContent = "C'est froid !";
        }
        vies--;
        verifyloose ();
    }
    

    })
    // fonction verifyloose(qui verifie si l' on a perdu)?; couleur?;"set attribut" dessactive le bouton ainsi que la valeur vide

    const verifyloose = ()=> {
        if(vies === 0){ 
            body.style.backgroundImage = bgLoose;
            body.style.color= '#990000';
            essayerBtn.setAttribute("disabled","");
            message.textContent = `Vous avez perdu. La réponse était ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }

    }
    // innerHTML""(recupère ou defini) enlève tout le code HTML?;[] tableau; "for": pour;
    // i variable vie?=[coeur(gagne) et ou vide(perdu)];rappel: i++?,+=(pour chaque coeur rajout aux autres)
    // forEach(pour chaque element du tableau) fonction qui permet d'excecuter donnée tableau 
    // actualiseCoeurs fonction:debut du jeux(coeurs)

    const actualiseCoeurs =(Vies) =>{
        divVies.innerHTML = "";
        let tableauDeVies = [];
        for (let i = 0; i < vies; i++) {
            tableauDeVies.push(coeurPlein);
        }
        for (let i = 0; i < totalVies-vies; i++){
            tableauDeVies.push(coeurVides);
        }
        tableauDeVies.forEach(coeur =>{
            divVies.innerHTML += coeur;
        })
    }
    actualiseCoeurs(vies);

//  "() =>"{}:on lance une fonction;on enleve le massage pour tps de latence(message=none);"document.." fonction qui permet de recharge page

    rejouerBtn.addEventListener('click', () =>{
        message.style.display = 'none';
        document.location.reload(true);
    })
}
play();
