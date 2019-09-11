$(document).ready(function() {

// Setting up Global Variables
  var targetNumber
  var score 
  var food
  var wins =0; 
  $("#wins").text(wins);
  var losses =0;
  $("#losses").text(losses);
  
  //Function runs the game when player wins or losses

  //randomize numbers between 25 - 280 so each target number is different
  var newGame = function() {
    targetNumber = 25 + Math.floor(Math.random() * 280);
    console.log(targetNumber);

    $("#selected").text(targetNumber);

    //settting up randomize number between 4 images - value range from 0 - 12

    food =[];

    for (var i=0; i < 4; i++) {
      var foodValue = 0 + Math.floor(Math.random() * 12);
      food.push(foodValue);
    };

    console.log(food);

    
  })
