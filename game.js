// alert("Hello!");
// $("h1").css("color", "green"); Test to see if jQuery is installed ok > working

function nextSequence(){
    let ranNum = (Math.random() * 3) + 1;
    randomNumber = Math.floor(ranNum) // return a random num between 1 - 3
    return randomNumber;
};

console.log(nextSequence());