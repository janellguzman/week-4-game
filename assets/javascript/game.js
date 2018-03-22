$(document).ready(function() {

//Global variables
var randomNumber = $("#randomNumber");
var winsId = $("#wins");
var lossesId = $("#losses");
var totalscore = $("#totalscore");
var total = 0;
var wins = 0;
var losses = 0;
    
// Player will be shown a random number between 19 and 120 (per HW Game design notes) to start the game
// Referenced --> https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
var numGenerate = function (min, max) {
    return Math.floor(Math.random()*(max-min)+min);
    }
var randomGeneratedNumber = numGenerate(19,121);
    $(randomNumber).append(randomGeneratedNumber);

// A total of 4 Crystals should have a random hidden value between 1 and 12 (also per HW Game design notes).
var random1 = numGenerate(1,13);
var random2 = numGenerate(1,13);
var random3 = numGenerate(1,13);
var random4 = numGenerate(1,13);
    
// Function that refreshes the crystal values with new numbers after each win/loss
var refresh = function() {
    random1 = numGenerate(1,13);
    random2 = numGenerate(1,13);
    random3 = numGenerate(1,13);
    random4 = numGenerate(1,13);
    };

// Initial total score display
$(totalscore).html("Your total score is: " + total);

// Adding to total score based on user clicks, then running the check function to test the outcome
$("#crystal1").on("click", function(){
    total += random1;
    $(totalscore).html("Your total score is: " + total);
    check();
})
            
$("#crystal2").on("click", function(){
    total += random2;
    $(totalscore).html("Your total score is: " + total);
    check();
})

$("#crystal3").on("click", function(){
    total += random3;
    $(totalscore).html("Your total score is: " + total);
    check();
})

$("#crystal4").on("click", function(){
    total += random4;
    $(totalscore).html("Your total score is: " + total);
    check();
})
    
// Checks to see if user total score matches the random number
var check = function() {
    if (randomGeneratedNumber == total) {
        wins++;
        $(winsId).html("Wins: " + wins);
        $(randomNumber).empty();
        randomGeneratedNumber = numGenerate(19,121);
        $(randomNumber).html(randomGeneratedNumber);
        total = 0;
        $(totalscore).html("Your total score is: " + total)
        refresh();
}
    if (randomGeneratedNumber < total) {
        losses++;
        $(lossesId).html("Losses: " + losses);
        $(randomNumber).empty();
        randomGeneratedNumber = numGenerate(19,121);
        $(randomNumber).html(randomGeneratedNumber);
        total = 0;
        $(totalscore).html("Your total score is: " + total)
        refresh();
}

}
})