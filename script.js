//var titleS = document.querySelector("#qText");
var time = document.querySelector(".time");
var score = document.querySelector(".score");
var choice = document.querySelector(".buttons");
var start = document.querySelector("#start");


var question = "QUESTION HERE";
/*var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
       title: "A Rarely used data type may be:",
       choices: ["null", "unidentified", "symbol", "typeof"],
       answer: "typeof"
    },
    {
       title: "The parameters in a function are enclosed within ____.",
       choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
       answer: "parentheses"
    },
  ];*/
function startQuiz() {
   for (var i=0;i<question.length;i++) {
       document.getElementById("qText").innerHTML = question;

   }
}
$("#start").on("click", function() {
    startQuiz();
    //setAttribute(style="visibility:hidden");
});