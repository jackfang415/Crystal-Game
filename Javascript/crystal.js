$(document).ready(function(){

var wins = 0;
var losses = 0;
var randomNumber;
var itemOne = 0;
var itemTwo = 0;
var itemThree = 0;
var itemFour = 0;
var totalPoints = 0;


function genRandom (){
	randomNumber = [Math.floor(Math.random()*(102) + 19)];
	console.log(randomNumber);
}

function start(){
	totalPoints = 0;
	wins = 0;
	losses = 0;
	freshCrystal();

}
start();
// genRandom();
document.getElementById("NumberBox").innerHTML = [randomNumber]


function crystalGen(){
	item = [Math.floor(Math.random()*(12) + 1)]
	return item;
	console.log(item);
}

// crystalGen();



function freshCrystal(){
	genRandom();
	totalPoints = 0;
	itemOne = crystalGen();
	itemTwo = crystalGen();
	itemThree = crystalGen();
	itemFour = crystalGen();
	$("#NumberBox").html(randomNumber);
	$("#total").html("Your total score is: " + totalPoints);
	// conditions();
	console.log(itemOne);
	console.log(itemTwo);
	console.log(itemThree);
	console.log(itemFour);
}

// freshCrystal();

$("#itemOne").on("click", function(){

	totalPoints = parseInt(totalPoints) + parseInt(itemOne);
	document.getElementById("total").innerHTML = ("Your total score is: " + totalPoints)

	conditions();
	console.log(totalPoints);
});

$("#itemTwo").on("click", function(){
	totalPoints = parseInt(totalPoints) + parseInt(itemTwo);
		document.getElementById("total").innerHTML = ("Your total score is: " + totalPoints)

	conditions();
	console.log(totalPoints);
});

$("#itemThree").on("click", function(){
	totalPoints = parseInt(totalPoints) + parseInt(itemThree);
		document.getElementById("total").innerHTML = ("Your total score is: " + totalPoints)

	conditions();
	console.log(totalPoints);

});

$("#itemFour").on("click", function(){
	totalPoints = parseInt(totalPoints) + parseInt(itemFour);
		document.getElementById("total").innerHTML = ("Your total score is: " + totalPoints)

	conditions();
	console.log(totalPoints);
});

function conditions(){
if (totalPoints === randomNumber) {
	wins++;
	console.log(wins);
	// document.getElementById("Victory").innerHTML = ("Wins: " + wins)
	$("#Victory").text(wins);
	alert(wins);
	freshCrystal();
	
};

if (totalPoints > randomNumber){

	losses++;
	console.log(losses);
	document.getElementById("Defeated").innerHTML = ("Losses: " + losses)
	freshCrystal();
	
}
};

});