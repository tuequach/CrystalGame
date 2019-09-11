$(document).ready(function() {

//setting up Global Variables
  var targetNumber
  var allFood
  var playerScore 

  var wins = 0; 
  $("#wins").text(wins);

  var losses = 0;
  $("#losses").text(losses);
  
  //function runs the game when player wins or losses

  //randomize numbers between 25 - 280 so each target number is different
  var newGame = function() {
    targetNumber = 25 + Math.floor(Math.random() * 280);
    console.log(targetNumber);

    $("#selected").text(targetNumber);

    //settting up randomize number between 4 images - value range from 0 - 25

    allFood =[];

    for (var i=0; i < 4; i++) {
      var foodValue = 0 + Math.floor(Math.random() * 25);
      allFood.push(foodValue);
    };

    console.log(allFood);

    //each food images is ties in with each values

    $("#hamburger").attr( "value", allFood[0]);
    $("#hotdog").attr( "value", allFood[1]);
    $("#fries").attr( "value", allFood[2]);
    $("#soda").attr( "value", allFood[3]);
    
    //resetting score to 0
    playerScore = 0;
    $("#playerScore").text(playerScore);
  }


  //on click values where score will match with the same images when guessed

  $(".food").on("click", function() {
    var eachFood = ($(this).attr("value"));
    eachFood = parseInt(eachFood);
    playerScore = playerScore + eachFood;
    $("#playerScore").text(playerScore);

    console.log(food);
    //loop for game to check if players won or losses 

    if (playerScore === targetNumber) {
      wins = wins + 1;
      $("#wins").text(wins);
      $("#message").text("Congrats! You are the New Fast Food Champion!");
      newGame();
    } else if (playerScore > targetNumber) {
      losses = losses + 1;
      $("#losses").text(losses);
      $("#message").text("Oh no! You've overstuffed yourself. Try again next year champ!")
      newGame();
    };
  });
  
  //new game when page loads
  newGame();

})
