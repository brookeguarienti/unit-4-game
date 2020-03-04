$(document).ready(function(){

// variable that holds randomly selected computer number
var targetNumber = 0;
// variable that holds wins
var wins = 0;
// variable that holds losses
var losses = 0;
// variable that holds user guesses
var counter = 0;
// //variable that holds array of number options
// var numberOptions = [];
// variable that holds each crystal item with name and value 
    // value set to 0 so it can hold randomly selected computer number
var img = {
    blueCrystal:
    {
        name: "blueCrystal",
        value: 0,
    },
    clearCrystal:
    {
        name: "clearCrystal",
        value: 0,
    },
    redCrystal:
    {
        name: "redCrystal",
        value: 0,
    },
    purpleCrystal:
    {
        name: "purpleCrystal",
        value: 0,
    }
};


function gameStart(){

// chooses a random number between 19 and 120 to appear as our targetNumber
targetNumber = Math.floor(Math.random() * 102 + 19)

// puts the computer chosen number from var targetNumber to class computer-number displayed on screen 
$(".computer-number").text(targetNumber);

$(".counter").text(counter);

$("#wins").text(wins);

$("#losses").text(losses);

counter = 0;

// grabs the crystal value from img variable and applies a random number between 1 and 12
img.blueCrystal.value = Math.floor(Math.random() * (12 ) + 1);
img.clearCrystal.value = Math.floor(Math.random() * (12 ) + 1);
img.redCrystal.value = Math.floor(Math.random() * (12 ) + 1);
img.purpleCrystal.value = Math.floor(Math.random() * (12 ) + 1);
}

// win logic 
function winLogic(){
    if (counter > targetNumber) {
        losses++;
        console.log("losses: " + losses);
    
        $("#losses").text(losses);
    
        gameStart();
    } 
    else if (counter === targetNumber){
        wins++;
       console.log("wins: " + wins);
       
        $("#wins").text(wins);
    
        gameStart();
    } 
    }

// call the function gameStart
gameStart();

// adds the event listener "click" to each crystal img
// then pull the chosen value and add it to the user counter
$("#blueCrystal").on("click", function() {
  counter += img.blueCrystal.value;
   console.log(img.blueCrystal.value);
   $(".counter").text(counter);
   console.log("counter:" + counter);
   winLogic();
});
$("#clearCrystal").on("click", function() {
    counter += img.clearCrystal.value;
   console.log(img.clearCrystal.value);
   $(".counter").text(counter);
   console.log("counter:" + counter);
   winLogic();
});
$("#redCrystal").on("click", function() {
    counter += img.redCrystal.value;
   console.log(img.redCrystal.value);
   $(".counter").text(counter);
   console.log("counter:" + counter);
   winLogic();
});
$("#purpleCrystal").on("click", function() {
    counter += img.purpleCrystal.value;
   console.log(img.purpleCrystal.value);
   $(".counter").text(counter);
   console.log("counter:" + counter);
   winLogic();
});
})
