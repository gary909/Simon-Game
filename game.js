
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

$(document).keypress(function(event){
  // alert('You pressed a key');
  nextSequence()
  $("#level-title").text("level " + level);
  level += 1;
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});


function nextSequence() {
  
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
  playSound(randomChosenColour);
  console.log('hellloooo')
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");
  
  // console.log("You pressed " + currentColour);

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}