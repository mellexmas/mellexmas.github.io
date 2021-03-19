
/*
1)créer classe voiture: numéro/couleur/balise/left (initialiser à0)
methode : 
_ avancer() pour faire avancer la voiture 
vers la droite de maniere entre 10 et 50px en rand.
_ addPiste() créer une balise et la mettre sur la piste


2) touche L(event press keyup keydown keypress) fait avancer voiture 1;
keyup sur body l = 76 / s =83
document.body.addEventListener("keydown", function(e))
3) touche S fait avancer voiture 2;
4) faire chrono pour savoir cb de temps a course a duré
setInterval() lors départ 1ere voiture
5) la 1ere voiture qui arrive au bout de la piste a gagné
*/
var bNumero = document.getElementById("numero");
var bCouleur = document.getElementById("couleur");
var btnCar = document.getElementById("btn-add-car");
var bPiste = document.getElementById("piste");
var bAvancer = document.getElementById("btn-avancer");
var body = document.getElementById("toto");
var bChrono = document.getElementById("chrono");
var v1= null;
var v2= null;
var newX=0;
var chrono = -1;
var temps = 0;
var isCourseFinish = false;

class voiture {
	constructor(numero, couleur, balise) {
		this._numero = numero.value;
		this._couleur = couleur.value;
		this._balise = balise;
		this._positionLeft = 0;
		this._finish = false;
	}
	
	
	addPiste(){
		let balise = document.createElement("div");
		balise.classList.add("balise");
		balise.style.backgroundColor = this._couleur;
		balise.innerText = "Voiture " + this._numero ;
		bPiste.appendChild(balise);
		this._balise = balise;
	}

	avancer(){
		if (this._finish){
			return
		}
		let nbPix = Math.floor(Math.random() * Math.floor(50)); //attention entre 10 et 50 et pas 0. 10 + math rand * 40
		this._positionLeft = this._positionLeft + nbPix;
		this._balise.style.left = this._positionLeft + "px";	
		


		if (this._positionLeft >= 900){
			this._finish = true;
			console.log("winner");
			if(!isCourseFinish) {
				this._balise.style.border = "5px solid black";
				this._balise.innerText = 'WINNER';
				this._balise.classList.add("winner");
				clearInterval(chrono);
				console.log("la course a durée ", temps/1000, "sec");
				bChrono.value = temps/1000;
				isCourseFinish = true;
			} else {
				this._balise.innerText = "LOOSER";
			}
		} 
		console.log("nbPix", nbPix);
		console.log("_positionLeft",this._positionLeft);
		console.log("total" , this._balise.style.left);
	}

	
}

btnCar.addEventListener("click", function(e){
	e.preventDefault();
	var voitureN = new voiture(numero, couleur);

	if (v1 == null) {
		v1 = voitureN;
		v1.addPiste();
	} else{
		v2 = voitureN;
		v2.addPiste();

	}

	bAvancer.addEventListener("click", function(o){
	o.preventDefault();
	voitureN.avancer();
	
})

	body.addEventListener("keydown", function(c){ //si pas de balise sur body : document.body.addEvent....
    var code = c.keyCode;
    if (chrono < 0 && (code == 76 || code == 83)) {
    	chrono = setInterval(
    				function()
    					{ temps += 10;
    					  bChrono.value = temps/1000;
							//console.log("temps:", temps) 
    					}, 10);
    }


    if(code == 76){ // L
    	console.log(v1) ; 
    	v1.avancer()

    }else if (code == 83){
    	v2.avancer();
    	console.log(v2);
    }
});


})




/*body.addEventListener("keydown", function(c){
   var code = c.keyCode;
    if(code == 76){
    voitureN.avancer()
     alert("l Pressed");   
    }else if (code == 83){
    	alert("S pressed");
    }
});


/* Je test des trucs et j'aime bien;

body.addEventListener("click", function(c){
 	c.preventDefault()
 	alert("quand je clique ça pop");
 });



$("body").on("keydown", function(e){
   var code = e.keyCode;
    if(code == 76){
     alert("l Pressed");   
    }else if (code == 83){
    	alert("S pressed");
    }
});

try {
v1.avancer()
} catch(e) {console.log(e) }

console.log("touche: ", code); pour savoir le code d'une touche
*/
