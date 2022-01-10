
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;


//listen for any keypress
$(document).keypress(function(event){
  if (!started) {
    // alert('You pressed a key');
    $("#level-title").text("level " + level); // change text
    nextSequence()
    started = true;
  }
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
});


function nextSequence() {
  
  level += 1;

  $("#level-title").text("level " + level); // change text
  
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
  playSound(randomChosenColour);
  // console.log('hellloooo');
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

function checkAnswer(currentLevel){
  if (currentLevel == gamePattern) {
    console.log("success")
  } else {
    console.log("wrong")
  }
}