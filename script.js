var playarea = document.querySelector("#playarea");
var time = document.querySelector(".time");
var score = document.querySelector(".score");
var start = document.querySelector("#start");
var reportright = document.querySelector("#reportright");
var reportwrong = document.querySelector("#reportwrong");

var questions = ["Commonly used data types DO NOT include:","The condition in an if / else statement is enclosed within ____.","A Rarely used data type may be:","The parameters in a function are enclosed within ____."];
var choices1 = ["strings", "booleans", "alerts", "numbers"];
var choices2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var choices3 = ["null", "unidentified", "symbol", "typeof"];
var choices4 = ["parentheses", "square brackets", "curly brackets", "quotes"];


// functions to deal with correct or wrong answers, and clear result on timer
function correct() {
    reportright.textContent = "CORRECT";
    setTimeout(clear, 500);
}
function wrong() {
    reportwrong.textContent = "WRONG";
    setTimeout(clear, 500);
}
function clear() {
    reportwrong.textContent = "";
    reportright.textContent = "";
    
}
//This is my play area to be hidden pre-start
function playareanoShow(){
    playarea.style.display = "none";
}
playareanoShow();
//-------------------------------------------------

//Quiz Functions, had to piggyback 4 of them, as i was unable to get the array going like I wanted
function startQuiz1() {
   for (var i=0;i<questions.length;i++) {
       document.getElementById("qText").innerHTML = questions[0];
       document.getElementById("A").innerHTML = choices1[0];
       document.getElementById("B").innerHTML = choices1[1];
       document.getElementById("C").innerHTML = choices1[2];
       document.getElementById("D").innerHTML = choices1[3];
       $("#A").on("click", function() {
        wrong();
       });
       $("#B").on("click", function() {
        wrong();
       });
       $("#C").on("click", function() {
        correct();
        setTimeout(startQuiz2, 500);
       });
       $("#D").on("click", function() {
        wrong();
       });
    }
};

function startQuiz2() {
    for (var i=0;i<questions.length;i++) {
        document.getElementById("qText").innerHTML = questions[1];
        document.getElementById("A").innerHTML = choices2[0];
        document.getElementById("B").innerHTML = choices2[1];
        document.getElementById("C").innerHTML = choices2[2];
        document.getElementById("D").innerHTML = choices2[3];
        $("#A").on("click", function() {
         wrong();
        });
        $("#B").on("click", function() {
         wrong();
        });
        $("#C").on("click", function() {
         correct();
         setTimeout(startQuiz3, 500);
        });
        $("#D").on("click", function() {
         wrong();
        });
     }
 };

function startQuiz3() {
   for (var i=0;i<questions.length;i++) {
       document.getElementById("qText").innerHTML = questions[2];
       document.getElementById("A").innerHTML = choices3[0];
       document.getElementById("B").innerHTML = choices3[1];
       document.getElementById("C").innerHTML = choices3[2];
       document.getElementById("D").innerHTML = choices3[3];
       $("#A").on("click", function() {
        wrong();
       });
       $("#B").on("click", function() {
        wrong();
       });
       $("#C").on("click", function() {
        wrong();
       });
       $("#D").on("click", function() {
        correct();
       });
    }
}


// This is my Start button click event listener, begins function, hides button div, shows playarea
$("#start").on("click", function() {
    startQuiz1();
    start.style.display = "none";
    playarea.style.display = "block";
});


//-----------------------------------------------
/*var questions = [
    {
      prompt: ,
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      prompt: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
       prompt: "A Rarely used data type may be:",
       choices: ["null", "unidentified", "symbol", "typeof"],
       answer: "typeof"
    },
    {
       prompt: "The parameters in a function are enclosed within ____.",
       choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
       answer: "parentheses"
    },
];*/