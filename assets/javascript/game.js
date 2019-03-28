
  var targetNumber = 48;
  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  var imageHamburger = $("<img>");
  var imageHotdog = $("<img>");
  var imageFries = $("<img>");

  // Arrays of values will be assign later to different images
  var numberOptions = [5, 18, 24,];

  //loop for every different food to be created to each values
  // also adding on class for each images so it can link to CSS

  for (var i = 0; i < numberOptions.length; i++) {
    imageHamburger.addClass("hamburger-image");
    imageHotdog.addClass("hotdog-image");
    imageFries.addClass("fries-image");
  }
