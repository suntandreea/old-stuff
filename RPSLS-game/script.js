var scorPlayer = 0;
var scorPc = 0;

function playerFunction (imagine)
{
alegereaMea = imagine;

var variante  =  {
				rock : {
					nume: "Rock", 
					invinge: {
						scissors: "crushes", 
						lizard: "crushes"
					}},
                paper: {
					nume: "Paper", 
					invinge: {
						rock:  "covers", 
						spock: "disproves"
					}},
                scissors: {
					nume: "Scissors", 
					invinge: {
						paper : "cut", 
						lizard: "decapitates"
					}},
                lizard: {
					nume: "Lizard",
					invinge: {
						paper: "eats", 
						spock: "poisons"}
					},
                spock: {
					nume: "Spock", 
					invinge: {
						scissors : "smashes",
						rock : "vaporises"
                }}};

var alegerePc =  Math.floor((Math.random()*5) + 1);

switch (alegerePc) {
    case 1:
        alegerePc = "rock";
        break;
    case  2:
        alegerePc = "paper";
        break;
    case  3:
        alegerePc = "scissors";
        break;
    case  4:
        alegerePc = "lizard";
        break;
    case  5:
		alegerePc = "spock";
		break;
}	

alert("Computer chose " + alegerePc + " !" );

if(alegerePc == alegereaMea){
    alert("It's a draw!");
}

else{
    alegereaMea = variante[alegereaMea];    
    
    var victorie = alegereaMea.invinge[alegerePc] !== undefined;
    alegerePc = variante[alegerePc];
     
	    if(victorie) {        
        alert("Congratulations! You won! " + alegereaMea.nume + " " + alegereaMea.invinge[alegerePc.nume.toLowerCase()] + " " + alegerePc.nume + "!") ;
		scorPlayer++;
   }
	else{
        alert("Sorry dude, you kinda lost. " + alegerePc.nume + " " + alegerePc.invinge[alegereaMea.nume.toLowerCase()] + " " + alegereaMea.nume + "!");
		scorPc++;
    }   
}
document.getElementById('you').innerHTML = scorPlayer ;
document.getElementById('pc').innerHTML = scorPc ;
}