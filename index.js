var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
var imgRandom1="Images/dice"+randomNumber1+".png";
var imgRandom2="Images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",imgRandom1);
document.querySelector(".img2").setAttribute("src",imgRandom2);

if(randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomNumber1<randomNumber2)
{
	document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else if (randomNumber1 === randomNumber2){

    document.querySelector("h1").innerHTML = "DRAW!";

}