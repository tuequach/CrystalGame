$(document).ready(function() {

//setting up Global Variables
  var targetNumber
  var score 
  var food
  var wins =0; 
  $("#wins").text(wins);
  var losses =0;
  $("#losses").text(losses);
  
  //function runs the game when player wins or losses

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

    //each food images is ties in with each values

    $("#hamburger").attr("value", food[0]);
    $("#hotdog").attr("value", food[1]);
    $("#fries").attr("value", food[2]);
    $("#soda").attr("value", food[3]);
    
    //resetting score to 0
    score = 0;
    $("#score").text(score);
  }


  //on click values where score will match with the same images when guessed

  $(".food").on("click", function () {
    var eachFood = ($(this).attr("value"));
    eachFood = parseInt(eachFood);
    score = score + eachFood;
    $("score").text(score);

    //loop for game to check if players won or losses 

  
  })

  })
