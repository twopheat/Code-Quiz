//var titleS = document.querySelector("#qText");
var time = document.querySelector(".time");
var score = document.querySelector(".score");
var choiceS = document.querySelector(".buttons");
var question = "Simple Question";
var questions = [
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
  ];


function loopQuiz() {
    var i;
    for (i=0;i<questions.length;i++) {
        document.getElementById("qText").innerHTML = 11;
    }
}
document.getElementById("qText").innerHTML = question;