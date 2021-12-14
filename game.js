// alert("Hello!");
// $("h1").css("color", "green"); Test to see if jQuery is installed ok > working

let buttonColours = ["red", "blue", "green", "yellow"];

let randomChosenColour = nextSequence();


function nextSequence(){
    let ranNum = (Math.random() * 4);
    randomNumber = Math.floor(ranNum) // return a random num between 1 - 3
    return randomNumber;
};

console.log(buttonColours[randomChosenColour]);
// console.log(randomChosenColour);