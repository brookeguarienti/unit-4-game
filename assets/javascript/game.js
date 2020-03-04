

// number that computer randomly selects
var targetNumber = 0;
var wins = 0;
var losses = 0;
var counter = 0;
var numberOptions = [];
var img = [
    {
        name: "Blue Crystal",
        value: 0,
    },
    {
        name: "Clear Crystal",
        value: 0,
    },
    {
        name: "Red Crystal",
        value: 0,
    },
    {
        name: "Purple Crystal",
        value: 0,
    }
];

// variable resetGame equals the function and holds the variables that will reset the game 
var resetGame = function() {
var targetNumber = 0;
var wins = 0;
var losses = 0;
var counter = 0;
var numberOptions = [];
var img = [
    {
        name: "Blue Crystal",
        value: 0,
    },
    {
        name: "Clear Crystal",
        value: 0,
    },
    {
        name: "Red Crystal",
        value: 0,
    },
    {
        name: "Purple Crystal",
        value: 0,
    }
];

}

min = 20;
max = 120;

// chooses a random number between 19 and 120 to appear as our targetNumber
var targetNumber = Math.floor(Math.random() * (max - min + 1) ) + min;

// puts the computer chosen number from var targetNumber to class computer-number displayed on screen 
$(".computer-number").text(targetNumber);

// for loop to loop through the numberOptions array 
for (let i = 0; i < numberOptions.length; i++) {
    img.attr("data-crystalvalue", numberOptions[i]);
// selects the img     
    // var img = $("<img>");
    // img.attr("data-crystalvalue", numberOptions[i]);
    // $("#crystals").append(img);
}

// adds the event listener "click" to each crystal img, and then assigns a random number to it
$(".crystals").on("click", function() {
    min = 1;
    max = 12;
    var crystalValue = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(crystalValue);
    
    crystalValue = parseInt(crystalValue);

    // add crystalValue to user's "counter", a global variable
    // with every click from each crystal, adds to the global counter// same as counter = counter + crystalValue
    counter += crystalValue; 

    // all of the same game win-lose logic applies
    $(".counter").text(counter);

    // win logic 
    if (counter === targetNumber){
        wins++;
       console.log(wins);
       resetGame();
       console.log(resetGame());
       
        $("#wins").text("wins: " + wins);
    } else if (counter >= targetNumber) {
        losses++;
        console.log(losses);
        resetGame();
        console.log(resetGame());
        
        $("#losses").text("losses: " + losses);
    } else{
        return false;
    }
});




// $(document).ready(function() {













// // Create a for-loop to iterate through the img array.
// for(var i=0; i < numberOptions.length; i++){

// // Create a variable named "imgBtn" equal to $("<button>");
//     var imgBtn = $('<button>');
//     console.log(imgBtn)

// // Whenever the button is clicked...
// $("#crystals").on("click", function(){
//     alert("i've been clicked");
// });

// // create a variable that sets a random number selection into an array 
//     function getRandomNum(min, max){
//        return Math.floor(Math.random() * (max - min + 1) ) + min;
//     } 
    
//     $(".computer-number").text(numberOptions)
//         console.log(numberOptions);
//    var numberOptions = getRandomNum
//         console.log(numberOptions)

// // assign a random number to each imgBtn
//     imgBtn.attr("data-img", numberOptions[i]);
//     console.log()

// };


// $(".crystal-image").on("click", function() {
//     var crystalValue = ($(this).attr("data-img"));
//     crystalValue = parseInt(crystalValue);
//     // add crystalValue to user's "counter", a global variable
//     // with every click from each crystal, adds to the global counter// same as counter = counter + crystalValue
//     counter += crystalValue;

//     // all of the same game win-lose logic applies
//     alert("New Score: " + counter);

//     if (counter === targetRandomNum){
//         alert("You win!");
//     } else if (counter >= targetRandomNum){
//         alert("You lose!");
//     }


    
// });


// // when game starts, computer selects a random number and displays on screen
// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }
//  // create a for loop that assigns a random number to each crystal img each time the game restarts
//  for (var i = 0; i < numberOptions.length; i++) {

//   }


// computer will randomly assign a number to each crystal image
// user will click on one of the crystals, 
// > which will increase their counter until they lose or win
// 
