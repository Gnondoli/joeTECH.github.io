var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var Message = document.querySelector('.Message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('.section');
var compteur = 0;

//nombre aleatoire debut jeu

random1 = Math.random()*11 << 0;// Pour generer des nombre entre 0 et 11
random2 = Math.random()*11 << 0;// Pour generer des nombre entre 0 et 11
console.log(random1);
console.log(random2);
//inserer les nombre au hazarre dans les variable nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;   

//fonction de verification
function verifier(){
    //recuperer le resultat entre par le joueur
    var res = document.querySelector('.res').value;
    if(random1 + random2 == res){
        Message.style.background = "green";
        Message.innerHTML = "Correcte."
        //creer d'autre nombre aleatoire
        
            //nombre aleatoire debut jeu
            random1 = Math.random()*11 << 0;// Pour generer des nombre entre 0 et 11
            random2 = Math.random()*11 << 0;// Pour generer des nombre entre 0 et 11
            console.log(random1);
            console.log(random2);
            //inserer les nombre au hazarre dans les variable nb1 et nb2
            nb1.innerHTML = random1;
            nb2.innerHTML = random2; 
            compteur = compteur + 1 

            
    }
    else{
        Message.style.background = "red";
        Message.innerHTML = "Vous avez perdu."
        section.innerHTML = " ";
        score.innerHTML =`<span>${compteur}</span></br> Score`//(attention ! ce signe est donne par la combinaison "ALTGR + 7 alphanumerique")
    }
}
