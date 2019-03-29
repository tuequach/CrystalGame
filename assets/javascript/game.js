
  var targetNumber = 48;
  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  var imageHamburger = $("<img>");
  var imageHotdog = $("<img>");
  var imageFries = $("<img>");

  // Arrays of values will be assign later to different images
  var numberOptions = [5, 18, 24,];

  //loop for every different food to be created to each values
  // also adding on class for each images so it can link to CSS and making sure it shows on page
  //linking images to html and making attr linked to a certain numberOptions

  for (var i = 0; i < numberOptions.length; i++) {
    imageHamburger.addClass("hamburger-image");
    imageHotdog.addClass("hotdog-image");
    imageFries.addClass("fries-image");

    imageHamburger.attr("src", "assets/images/hamburger.png");
    imageHotdog.attr("src", "assets/images/hamburger.png");
    imageFries.attr("src", "assets/images/hamburger.png");

    imageHamburger.attr("data-hamburgervalue", numberOptions[0]);
    imageHotdog.attr("data-hogdogvalue", numberOptions[1]);
    imageFries.attr("data-friesvalue", numberOptions[2]);

    $("#hamburger").append(imageHamburger);
    $("#hotdog").append(imageHotdog);
    $("#fries").append(imageFries);
    
  }
