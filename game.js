// alert("Hello!");
// $("h1").css("color", "green"); // Test to see if jQuery is installed ok > working
// $("#red").css("background-color", "green"); // select the button with the ID 'red' and change it's BG color green
// $("#red").fadeIn(1000).fadeOut(1000).fadeIn(1000);

let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence(){
    let ranNum = (Math.random() * 4);
    randomNumber = Math.floor(ranNum) // return a random num between 0 - 3
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);

    // return gamePattern;
};


console.log(nextSequence());
// console.log(randomChosenColour);