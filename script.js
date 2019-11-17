var playarea = document.querySelector("#playarea");
var time = document.querySelector(".time");
var score = document.querySelector(".score");
var start = document.querySelector("#start");
var reportright = document.querySelector("#reportright");
var reportwrong = document.querySelector("#reportwrong");

var questions = ["Commonly used data types DO NOT include:","The condition in an if / else statement is enclosed within ____.","A Rarely used data type may be:","The parameters in a function are enclosed within ____."];
var choices1 = ["strings", "booleans", "alerts", "numbers"];
var choices2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var choices3 = ["null", "unidentified", "typeof", "symbol"];
var choices4 = ["curly brackets", "square brackets", "parentheses", "quotes"];


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
}

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
 }
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
         correct();
         setTimeout(startQuiz4, 500);
        });
        $("#D").on("click", function() {
         wrong();
        });
     }
 }
 
 function startQuiz4() {
     for (var i=0;i<questions.length;i++) {
         document.getElementById("qText").innerHTML = questions[3];
         document.getElementById("A").innerHTML = choices4[0];
         document.getElementById("B").innerHTML = choices4[1];
         document.getElementById("C").innerHTML = choices4[2];
         document.getElementById("D").innerHTML = choices4[3];
         $("#A").on("click", function() {
          wrong();
         });
         $("#B").on("click", function() {
          wrong();
         });
         $("#C").on("click", function() {
          correct();
          setTimeout(stopQuiz, 500);
         });
         $("#D").on("click", function() {
          wrong();
         });
      }
  }

  function stopQuiz() {
    start.style.display = "block";
    playarea.style.display = "none";
  }
// This is my Start button click event listener, begins function, hides button div, shows playarea
$("#start").on("click", function() {
    startQuiz1();
    start.style.display = "none";
    playarea.style.display = "block";
});


// timer function not implimented yet*
function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;


			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (seconds < "10") { seconds = "0" + seconds; }

			$("#time").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);