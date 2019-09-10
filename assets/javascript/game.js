$(document).ready(function() {

  var targetNumber = 240;
  $("#number-to-guess").text(targetNumber);
  // Arrays of values will be assign later to different images

  var counter = 0;

  var numberOptions = [24, 3, 12, 20];
  //loop for every different food to be created to each values
  // also adding on class for each images so it can link to CSS and making sure it shows on page
  //linking images to html and making attr linked to a certain numberOptions
  var imageHamburger = $("<img>");
  var imageHotdog = $("<img>");
  var imageFries = $("<img>");
  var imageSoda = $("<img>");

  for (var i = 0; i < numberOptions.length; i++) {
    imageHamburger.addClass("hamburger-image");
    imageHotdog.addClass("hotdog-image");
    imageFries.addClass("fries-image");
    imageSoda.addClass("soda-image");

    imageHamburger.attr("src", "assets/images/hamburger.png");
    imageHotdog.attr("src", "assets/images/hotdog.png");
    imageFries.attr("src", "assets/images/fries.png");
    imageSoda.attr("src", "assets/images/soda.png");

    imageHamburger.attr("data-hamburgervalue", numberOptions[0]);
    imageHotdog.attr("data-hogdogvalue", numberOptions[1]);
    imageFries.attr("data-friesvalue", numberOptions[2]);
    imageSoda.attr("data-sodavalue", numberOptions[3]);


    $("#hamburger").append(imageHamburger);
    $("#hotdog").append(imageHotdog);
    $("#fries").append(imageFries);
    $("#soda").append(imageSoda);

  }

// Testing out first function w/ hamburgers

$(".hamburger-image").on("click", function () {
  var hamburgerValue = ($(this).attr("data-hamburgervalue"));
    hamburgerValue = parseInt(hamburgerValue);
    counter += hamburgerValue;
      alert ("New score: " + counter);
      if (counter === targetNumber) {
        alert ("Yay, you've eatten one hamburger.");
      }
      else if (counter >= targetNumber) {
        alert("Oh no! you're overstuffed yourself.");
      }
    });

// function w/ hotdog, pls work
  
$(".hotdog-image").on("click", function () {
  var hotdogValue = ($(this).attr("data-hotdogvalue"));
    hotdogValue = parseInt(hotdogValue);
    counter += hotdogValue;
      alert ("New score: " + counter);
      if (counter === targetNumber) {
        alert ("Yay, you've eaten one hotdog.");
      }
      else if (counter >= targetNumber) {
        alert("Oh no! you're overstuffed yourself.");
      }
    });

// function w/ fries
$(".fries-image").on("click", function () {
  var friesValue = ($(this).attr("data-friesvalue"));
    friesValue = parseInt(friesValue);
    counter += friesValue;
      alert ("New score: " + counter);
      if (counter === targetNumber) {
        alert ("Yay, you've eaten one pack of fries.");
      }
      else if (counter >= targetNumber) {
        alert("Oh no! you're overstuffed yourself.");
      }
    });

//function w/ soda
$(".soda-image").on("click", function () {
  var sodaValue = ($(this).attr("data-sodavalue"));
    sodaValue = parseInt(sodaValue);
    counter += sodaValue;
      alert ("New score: " + counter);
      if (counter === targetNumber) {
        alert ("Yay, you've drank one cup of soda.");
      }
      else if (counter >= targetNumber) {
        alert("Oh no! you're overstuffed yourself.");
      }
    });
  });



